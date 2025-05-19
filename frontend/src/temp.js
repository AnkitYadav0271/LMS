import React from 'react';

const UserContext = React.createContext();

export default  userContext;

//we will now create provider

//we will create a folder userContext.jsx

export const userContextProvider = ({children})=>{
 const [user,setUser] = React.useState(null);
 return(
 <UserContext.Provider value={{user,setUser}}>
     {children}
 </UserContext.Provider>
 );
}

