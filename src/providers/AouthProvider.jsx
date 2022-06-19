import{Context,createContext, useContext, useEffect, useState} from 'react';



const AouthProvider=createContext();
const AouthProviderDispacher=createContext();

const AouthProviders = ({children}) => {
    const[aouth,setAouth]=useState(false);
    useEffect(()=>{
        const userData=JSON.parse(localStorage.getItem('loginState')) || false;
        setAouth(userData);
    },[])

    return (  
        <AouthProvider.Provider value={aouth} >
            <AouthProviderDispacher.Provider value={setAouth} >
                {children}
            </AouthProviderDispacher.Provider>
        </AouthProvider.Provider>
    );
};
 
export default AouthProviders;

export const useAouth=()=>useContext(AouthProvider);

export const useAouthAction=()=>useContext(AouthProviderDispacher);