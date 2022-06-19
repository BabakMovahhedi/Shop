import { useFormik } from "formik";
import { signupUser } from "../services/httpServices";
import Input from "../common/input";
import { Link,useNavigate} from "react-router-dom";
import '../pages/SignUp.css';
import * as yup from 'yup';
import { useState } from "react";
import { useAouthAction } from "../providers/AouthProvider";


// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema=yup.object({
    name:yup.string().required('name is required'),
    email:yup.string().email('invalid email format').required('email is required'),
    phone:yup.number().required('phone is required'),
    password:yup.string().required('password is required')    
});

const initialValues={
        name:"",
        email:"",
        phone:"",
        password:""
    };



const SignUp = () => {
    const[error,setError]=useState(null);
    const Navigate= useNavigate();
    const setLogin=useAouthAction();
    
    const onSubmit=async (values)=>{ 
        console.log(values); 
        const {name,email,phone,password}=values;
        const userdata={
        name:name,email:email,phoneNumber:phone,password:password
            };
    try {
         const{data} = await signupUser(userdata);   
         setLogin(data);
         localStorage.setItem('loginState',JSON.stringify(data) );      
       Navigate('/');
    } catch (error) {
        console.log(error.response.data.message);
        if(error.response && error.response.data.message)
        setError(error.response.data.message)
    }};

    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount:true,
        
     } );
    
    return ( 

     <div className="form_container">

     <form onSubmit={formik.handleSubmit}>    

     <Input formik={formik} name='name' label='Name' type='text' />
     <Input formik={formik} name='email' label='Email' type='email' />
     <Input formik={formik} name='phone' label='phone' type='tel'/>
     <Input formik={formik} name='password' label='password' type='password' />  

     <button type="submit" disabled={!formik.isValid} className='btn primary' >signup</button>
        {error && <p style={{color:"red"}}>{error} </p>}
        <Link to='/login'>
        <p> Login Befor ?</p>
        </Link>

    </form>

    </div>      
   
     );
}
 
export default SignUp;