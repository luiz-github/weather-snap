import "./button.css"

const Button = ({ ...props }) => {
    return (
        <button 
            onClick={ props.btnOnClick }
            className="bg-[#316ff6]">{ props.name }</button>
    )
}

export default Button;