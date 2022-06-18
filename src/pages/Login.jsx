import { useFormik } from "formik";
import Input from "../common/input";
import { Link} from "react-router-dom";
import '../pages/login.css';
import * as yup from 'yup';




const validationSchema=yup.object({    
    email:yup.string().email('invalid email format').required('email is required'),   
    password:yup.string().required('password is required')    
});


const Login = () => {

    const formik=useFormik({initialValues:{
        
        email:'',       
        password:''},
        onSubmit:(values)=>{console.log(values)},
        validationSchema:validationSchema,
        validateOnMount:true,
     } );

    return ( 

     <div className="form_container">

     <form onSubmit={formik.handleSubmit}>     
     <Input formik={formik} name='email' label='Email' type='email' />     
     <Input formik={formik} name='password' label='password' type='password' />                                    
     <button type="submit" disabled={!formik.isValid} className='btn primary' >Login</button>
     <Link to='/signup'>
        <p> signup Befor ?</p>
        </Link>
    </form>

    </div>      
   
     );
}
 
export default Login;