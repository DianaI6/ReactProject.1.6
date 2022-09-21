
function Button({ children, isActive, onClick , ...rest}) {
    return (
        <button
            {...rest}
            onClick={onClick}
            className={`text-white rounded-lg px-2 py-3 hover:bg-red-700 ${isActive ? "bg-red-700" : "bg-black"}`}>
            {children}
        </button>
    );
}


export default Button;