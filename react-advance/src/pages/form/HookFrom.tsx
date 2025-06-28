import {  useForm, type SubmitHandler } from "react-hook-form"


type Inputs = {
  email: string
  password: string
  blocked?: string
}

export default function HookForm() {

    
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors , isSubmitting},
  } = useForm<Inputs>()

  const delay = (d : number) => {
    return new Promise((resolve, _)=>{
        setTimeout(() => {
            resolve("done")
        }, d*1000);
    })
  }


  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    await delay(3)
    console.log(data)
    if(data.email !== "test"){
        setError("email",{
            type: "manual",
            message: "Email is not valid"
        })
    } else if(data.password !== "123456"){
        setError("blocked", {
            type: "manual",
            message: "User has been blocked"
        })
    }
  }


  console.log(watch("email")) 


  return (
   <div>
    {
        isSubmitting && <p className="text-blue-500">Submitting...</p>
    }
     <form onSubmit={handleSubmit(onSubmit)}>
      <input className="border-2 border-gray-300" {...register("email" , { required: true })} />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input className="border-2 border-gray-300" {...register("password", { required: true ,
         minLength:{value:6, message:"Password must be at least 6 characters"},
          maxLength:{value:20, message:"Password must be at most 20 characters"} })} />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <input disabled={isSubmitting} type="submit" />
      {errors.blocked && <p className="text-red-500">{errors.blocked.message}</p>}
    </form>
   </div>
  )
}