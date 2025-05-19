import {Button} from "@/components/ui/Button.jsx";
import {useReducer} from "react";


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

    //handleChange is here
     function handleChange(e){
         dispatch({
             type:"SET_FIELD",
             field:e.target.name,
             value:e.target.value
         });
     }

     //handleSubmit is here

    const handleSubmit = (e)=>{
         dispatch({
             type:"RESET"
         })
         e.preventDefault();
         console.log(state);
         alert("Form Submitted Successfully")
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
                <Button className={`p-2 h-8`} onClick={handleSubmit} type="submit">Login</Button>
            </form>

        </div>
    );
}