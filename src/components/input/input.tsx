import "./input.css"

const Input = ({ ...props }) => {
    return (
        <input 
            type="text"
            value={ props.inputValue}
            onChange={ props.inputOnChange }
            placeholder={ props.inputPlaceHolder } 
            className="outline border-black rounded-lg"
        />
    )
}

export default Input;