import { useFormik } from "formik";
import { useState,useEffect } from "react";
import { loginUser } from "../services/httpServices";
import Input from "../common/input";
import { Link, useNavigate} from "react-router-dom";
import * as yup from 'yup';
import { useAouthAction,useAouth } from "../providers/AouthProvider";
import { useQuery } from "../hooks/useQuery";
import '../pages/login.css';




const validationSchema=yup.object({    
    email:yup.string().email('invalid email format').required('email is required'),   
    password:yup.string().required('password is required')    
});


const Login = () => {
    const Navigate= useNavigate();
    const[error,setError]=useState(null);
    const setLogin=useAouthAction();
    const query=useQuery();
    const redirect = query.get('redirect') || '/';
    const Login=useAouth();
    useEffect(()=>{
        if(Login) Navigate(redirect);
    },[Login,redirect])
    const onSubmit=async (values)=>{ 
            console.log(values); 
            const {email,password}=values;
            const userdata={
            email:email,password:password
                };
        try {
             const{data} = await loginUser(userdata);
             setLogin(data);
             localStorage.setItem('loginState',JSON.stringify(data) );
             setError(null)
             Navigate(redirect);
        } catch (error) {
            console.log(error.response.data.message);
            if(error.response && error.response.data.message)
            setError(error.response.data.message)
        }};

    const formik=useFormik({initialValues:{
        
        email:'',       
        password:''},
        onSubmit:onSubmit,
        validationSchema:validationSchema,
        validateOnMount:true,
     } );

    return ( 

     <div className="form_container">

     <form onSubmit={formik.handleSubmit}>     
     <Input formik={formik} name='email' label='Email' type='email' />     
     <Input formik={formik} name='password' label='password' type='password' />                                    
     <button type="submit" disabled={!formik.isValid} className='btn primary' >Login</button>
     {error && <p style={{color:"red"}}>{error} </p>}
     <Link to={`/signup?redirect=${redirect}`}>
        <p> signup Befor ?</p>
        </Link>
    </form>

    </div>      
   
     );
}
 
export default Login;