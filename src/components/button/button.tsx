const Button = ({ ...props }) => {
    return (
        <button 
            onClick={ props.btnOnClick }
            className="p-2.5 ms-2 text-sm font-medium text-white focus:outline-none bg-blue-600 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                
            { props.name }
        
        </button>
    )
}

export default Button;