
import { CitiesValidator } from "../Validators/CitesValidator";
import { useForm } from "react-hook-form";


const Home = ()=>
{
    const { register,handleSubmit,formState:{errors}}=useForm()
    const formSubmitted=data=>console.log(data)

    return(
       <>

           <form onSubmit={handleSubmit(formSubmitted)}>
               <input placeholder="enter city" type="text"
                      {...register("cityName", CitiesValidator )}/>
               {errors.cityName && (<p>{errors.cityName.message}</p>)}
               <button>Unesi</button>
           </form>
       </>
    )


}


export default Home;