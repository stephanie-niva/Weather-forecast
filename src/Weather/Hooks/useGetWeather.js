import { getWeather } from "../utils";
import { useState,useEffect } from "react";

export const useGetWeather = ()=>{
    const[weather,setWeather]=useState([]);
    const [errors,setErrors]=useState('');
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        const fetchWeather = async()=>{
            try{
                setLoading(true);
                const response = await getWeather();
                setWeather(response.users);
                setLoading(false);

            }
            catch(error){
                setLoading(false)
                setErrors(`Error:${error.message}`)
            }
        }
        fetchWeather();
    },[])

    return {weather,loading,errors}
    

}
// import './App.css';
// import React, { useEffect, useState } from "react";
// export default function App() {

//   const [lat, setLat] = useState([]);
//   const [long, setLong] = useState([]);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       setLat(position.coords.latitude);
//       setLong(position.coords.longitude);
//     });

//     console.log("Latitude is:", lat)
//     console.log("Longitude is:", long)
//   }, [lat, long]);

//   return (
//     <div className="App">

//     </div>
//   );
// }