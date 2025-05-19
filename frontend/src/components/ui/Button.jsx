import "../../App.css";

//button for submit is here

 export const Button = (
    {
     children,onClick,type = "submit",
        className="",disabled = false,
        ...rest
    }
)=>
{
return (
    <button type={type} onClick={onClick} className={`bg-black text-white p-2
     text-xl font-medium w-30 h-10 m-2 rounded-2xl cursor-pointer shadow-2xl text-center  hover:bg-[#424242] 
     transition-colors duration-300 ease-in-out shadow-[10px_5px_15px_rgba(0,0,0,0.1)] flex items-center justify-center
 ${className}`}
            disabled={disabled} {...rest} >{children}</button>
);
}

// White Button is starting from here

export const WhiteButton = ({children,className,type="button",onClick,disabled=false,...rest})=>{
     return(
         <button className={`bg-[#eceff1] flex justify-center items-center ${className}`} type={type} onClick={onClick} disabled={disabled} {...rest}>{children}</button>
     );
}

