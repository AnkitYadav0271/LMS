import {Button} from "@/components/ui/Button.jsx";
import { useReducer} from "react";


export const Signup = ()=>{

    //initial State is here

    const initialState = {
       fullName:"",
        email:"",
        password:""
    }

    const reducer=(state,action)=>{
        switch (action.type){
            case  "SET_FIELD":
                return {...state,[action.field]:action.value}
            case "RESET":
                return initialState;
            default :
                throw new Error("Invalid Action ")
        }
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    const handleChange = (e) =>{
        dispatch({
            type:"SET_FIELD",
            field:e.target.name,
            value:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!state){
            alert("Enter all the fields correctly")
        }
        if ( !state.fullName || !state.email ||!state.password ){
            throw new Error("Enter all fields carefully");
        }

        if (state.password.length < 8){
            throw new Error("password length should be greater than 8");
        }
        dispatch({
            type:"RESET"
        })
        console.log(state);
        alert("Form Submitted Successfully");
    }

    return(
        <>
            <div className={`input-field`}>
                <form onSubmit={handleSubmit} className={`flex  justify-center flex-col ml-2 `}>
                    <div className={`flex flex-col `}>
                        <h1 className={`font-semibold p-1`}>Login</h1>
                        <p className={`p-1`}>Enter your details.Click signup when you are done</p>
                    </div>

                    <label htmlFor='fullName' className={` font-semibold p-2 `}>Full Name</label>

                    <input id='fullName' name="fullName"
                           value={state.fullName} type="text"
                           placeholder="eg :Ankit Yadav"
                           className={`p-2`} onChange={handleChange}/>

                    <label className={` font-semibold p-2 `}>Email</label>

                    <input name='email' id='email' value={state.email}
                           type="email" placeholder="sample@email.com"
                           className={`p-2`} onChange={handleChange}/>

                    <label htmlFor='password' className={`font-semibold p-2`}  onChange={handleChange}>Password</label>

                    <input id='password' name='password'
                           value={state.password} type={`password`} placeholder={`enter password`}
                           className={`p-2`}   onChange={handleChange}/>

                    <Button className={`p-2 h-8`} onClick={handleSubmit} type={"submit"} >Signup</Button>
                </form>

            </div>
        </>
    );
}