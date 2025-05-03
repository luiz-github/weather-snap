import "./input.css"

const Input = ({ ...props }) => {
    return (
        <input 
            type="text"
            value={ props.inputValue}
            onChange={ props.inputOnChange }
            placeholder={ props.inputPlaceHolder } 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
        />
    )
}

export default Input;