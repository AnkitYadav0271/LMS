import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {userLoggedIn} from "@/features/authSlice.js";

//:: createApi is a core function in Redux Toolkit's RTK Query library that simplifies and automates data fetching, caching,
// and synchronization with backend APIs in your Redux-powered React
// applications         :://


const USER_API = "http://localhost:8000/api/v1/user/";


export  const authApi = createApi({
    reducerPath:"authApi" ,                                                //here key name is inbuilt we can not change it.
    baseQuery:fetchBaseQuery(                                              //both baseQuery and fetchBaseQuery are inbuilt !!fetchBaseQuery({baseUrl:"this is inbuilt can't change it"}
        {baseUrl:USER_API,
        credentials:"include"})

    ,

    endpoints: (builder) => ( {
        registerUser:builder.mutation(
            { query:(inputData) =>({

                    url:"register",
                    method:'POST',
                    body:inputData
                }
                ) }                                      //end point has two value one is !! mutation if want to send a data
                                                          // another one is !! query when we want some data
        )    ,

        loginUser:builder.mutation(
            { query:(inputData) =>({
                    url:"login",
                    method:'POST',
                    body:inputData

                }),
                async onQueryStarted(arg,{queryFulfilled,getState,dispatch}){
                try {
                    console.log("Arg",arg)
                    console.log("getState",getState)
                    console.log("queryFulFilled",queryFulfilled)
                    const result = await queryFulfilled;
                    console.log('result',result);     //this is how we get the data from the frontend
                    dispatch(userLoggedIn({user:result.data.user}));
                }catch (e){
                 console.log('catch error of onQueryStarted',e)
                }
                }
            })

    })
})

export const {useRegisterUserMutation,useLoginUserMutation} = authApi;