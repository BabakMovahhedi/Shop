import { useFormik } from "formik";
import Input from "../common/input";
import { Link} from "react-router-dom";
import '../pages/SignUp.css';
import * as yup from 'yup';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema=yup.object({
    name:yup.string().required('name is required'),
    email:yup.string().email('invalid email format').required('email is required'),
    phone:yup.string().required('phone is required').matches(phoneRegExp, 'Phone number is not valid'),
    password:yup.string().required('password is required')    
});


const SignUp = () => {

    const formik=useFormik({initialValues:{
        name:'',
        email:'',
        phone:'',
        password:''},
        onSubmit:(values)=>{console.log(values)},
        validationSchema:validationSchema,
        validateOnMount:true,
     } );

    return ( 

     <div className="form_container">

     <form onSubmit={formik.handleSubmit}>

     <Input formik={formik} name='name' label='Name' type='text' />
     <Input formik={formik} name='email' label='Email' type='email' />
     <Input formik={formik} name='phone ' label='phone' type='tel'/>
     <Input formik={formik} name='password' label='password' type='password' />                                    
     <button type="submit" disabled={!formik.isValid} className='btn primary' >signup</button>
        <Link to='/login'>
        <p> Login Befor ?</p>
        </Link>
    </form>

    </div>      
   
     );
}
 
export default SignUp;