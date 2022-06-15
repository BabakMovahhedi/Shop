import './input.css';
const Input = ({label,name,formik,type}) => {
    return ( 
        <div className="formcontrol">
                    <label htmlFor={name}>{label}</label>
                    <input 
                    type={type} 
                    id={name}
                    name={name}
                    {...formik.getFieldProps(name)} 
                    // onChange={formik=>(handleChange)}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.name}
                     />
            {formik.errors[name] && formik.touched[name] && 
            <div className="errors">{formik.errors[name]}</div>}  
        </div>     
     );
};
 
export default Input;