import "../../App.css";

export  const Button = (
    {
     children,onClick,type = "submit",
        className="",disabled = false,
        ...rest
    }
)=>
{
return (
    <button type={type} onClick={onClick} className={`bg-black text-white p-2
     text-xl font-medium w-30 h-12 m-2 rounded-2xl cursor-pointer shadow-2xl text-center hover:bg-[#424242] 
     transition-colors duration-300 ease-in-out ${className}`}
            disabled={disabled} {...rest} >{children}</button>
);
}