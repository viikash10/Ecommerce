import { useState,useEffect } from "react";
import axios from "axios";



const useFetch = () =>{

   const [data,setData] = useState([]) ;
   const [loading,setLoading] = useState(false) ;
   const [error,setError] = useState(null) ;

   const fetchData = async () =>{
    setLoading(true) ;
    try {
        //const response = await axios.get('http://localhost:3000/api/products/') ;
        //const response = await axios.get('exp://8xjs4ay.vikash_10.8081.exp.direct/api/products/');
        const response = fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>console.log(json))
        //const response = fetch('https://fakestoreapi.com/products/');

        console.log(response.data) ;
        setData(response.data) ;
        setLoading(true) ;
    } catch (error) {
        setError(error) ;
    }
    finally{
        setLoading(false) ;
    } 
       
   }

   useEffect(()=>{
    fetchData() ;
   },[]);


   const refetch = () =>{
    setLoading(true);
    fetchData() ;
   }
   


   return {data,loading,error,refetch} ;
   
}

export default useFetch ;