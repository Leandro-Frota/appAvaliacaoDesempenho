import "./ButtonsMenu.css"



function ButtonsMenu({onClick,name}){
    return <div onClick={onClick}  className='btn'>{name}</div>
}

export default ButtonsMenu