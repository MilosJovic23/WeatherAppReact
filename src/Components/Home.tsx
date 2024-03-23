
import React from "react";
import { useForm } from "react-hook-form";


const Home = ():JSX.Element=>
{
    const { register,handleSubmit,formState:{errors}}=useForm()

    const cities:string[]=["Beograd","Subotica","Novi Sad","Zagreb","Sarajevo"]
    const isValidCities= (name:string)=> cities.includes(name)

    const successCallback = (location:GeolocationPosition) => {
        console.log(location.coords.latitude,location.coords.longitude);
    };
    const errorCallback = (error:object) => {
        console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback,errorCallback);

    const formSubmitted=(data:object)=>console.log(data)

    return(

           <form onSubmit={handleSubmit(formSubmitted)}>
               <input placeholder="enter city" type="text"
                      {...register("cityName", { validate:
                              ( isValidCities ) })}/>

           </form>

    )


}


export default Home;