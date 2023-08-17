
type Props = {
    isInputButton?: boolean 
}


function Button({isInputButton}: Props){
    return(
        <div className="py-2 px-4 bg-pink-600 hover:cursor-pointer" style={{borderTopRightRadius: isInputButton? "0.75rem" : "auto", borderBottomRightRadius: isInputButton? "0.75rem" : "auto"}}>
            Detectar
        </div>
    )
}

export default Button