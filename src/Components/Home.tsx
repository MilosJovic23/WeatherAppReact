
import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


const Home = ():JSX.Element=>
{
    const { register,handleSubmit,formState:{errors}}=useForm()
    const [userLocation,setUserLocation]=useState()
    const cities:string[]=["Beograd","Subotica","Novi Sad","Zagreb","Sarajevo"];

    console.log(userLocation)
    const isValidCity= (name:string)=> cities.includes(name);

    const successCallback = (location:GeolocationPosition) => {
        const latitude:number=location.coords.latitude;
        const longitude:number=location.coords.longitude;

        console.log(latitude,longitude);

        axios.get(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=65fef450e0446734068339pen8f2d65`)
            .then(response=>setUserLocation(response.data.address.city))
            .catch(error=>console.log(error)
                )
    };
    const errorCallback = (error:object) => {
        console.log(error);
    };
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
    }   else{
        console.log("Geolocation is not supported")
    }




    const formSubmitted=(data:object)=>console.log(data)

    return(

        <form onSubmit={handleSubmit(formSubmitted)}>
            <input placeholder="enter city" type="text"
                   {...register("cityName", {
                       validate:
                           (isValidCity)
                   })}/>
            <div><p>Your current location is:{userLocation}</p></div>
        </form>


    )


}


export default Home;