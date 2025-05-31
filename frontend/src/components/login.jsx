import {Button} from "@/components/ui/Button.jsx";
import {useReducer} from "react";
import {useLoginUserMutation} from "@/features/api/authApi.js";
import {  toast } from 'react-toastify';

//eQ8jvhrCeWz4PK06

export const Login =()=>{

    //initial state for the useReducer is here
    const initialState = {
        email:"",
        password:"",
    }
//reducer Function is here
    const reducer = (state,action)=>{
        switch (action.type) {
            case "SET_FIELD":
                return {...state,[action.field]:action.value}
            case "RESET":
                return initialState;
            default :
                throw new Error("Unknown Action Type");
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState);
    const [loginUser,{data,error,isLoading,isSuccess}] = useLoginUserMutation();
    console.log(":isSuccess",isSuccess);
    console.log("isError",error)
    console.log("data is here",data)
    //handleChange is here
     function handleChange(e){
         dispatch({
             type:"SET_FIELD",
             field:e.target.name,
             value:e.target.value
         });
     }

     //handleSubmit is here

    const handleSubmit = async (e)=>{

        e.preventDefault();
        dispatch({
            type:"RESET"
        })
       loginUser(state);
        if(isSuccess){
            toast.success(`welcome back ${data.user.fullName}`);
        }
        if (error.status > 200){

            toast.error(error.data.message || "Some error happened");

        }




    }

    return (
        <div className={`input-field`}>
            <form onSubmit={handleSubmit} className={`flex  justify-center flex-col ml-2 `}>
                <div className={`flex flex-col `}>
                    <h1 className={`font-semibold p-1`}>Login</h1>
                    <p className={`p-1`}>Enter your login details.Click login when you are done</p>
                </div>
                <label htmlFor={`email`} className={` font-semibold p-2 `}>Email</label>
                <input id={`email`} type="email"  name="email" placeholder="sample@email.com" className={`p-2`} onChange={handleChange} value={state.email} />
                <label htmlFor="password" className={`font-semibold p-2`}>Password</label>
                <input id={`password`} name={`password`} type={`password`} placeholder={`enter password`} className={`p-2`} onChange={handleChange} value={state.password} />
                <Button className={`p-2 h-8`} onClick={handleSubmit} disabled={isLoading} type="submit">{isLoading ? 'Loading':"login"}</Button>
            </form>

        </div>
    );
}