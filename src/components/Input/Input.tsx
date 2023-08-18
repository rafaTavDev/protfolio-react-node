import { useState, useEffect, useContext } from "react"
import Button from "../Button/button"
import { imgContext } from "../../Contexts/ImgContext"



type Props = {
    fnUrl: (param1: string) => void,
    fnReq: (img: string) => void
}

function Input({fnUrl, fnReq}: Props){

    const {img, setImg} = useContext(imgContext)
    const [urlAtual, setUrlAtual] = useState<string>("")

    function cliqueDetectar(){
        fnReq(urlAtual)
        setImg(urlAtual)
    }


    return (
        <div className="flex flex-col items-center gap-2">
            <div className="text-gray-800 text-xl">Coloque a url de uma imagem no input abaixo e detecte rostos em imagens:</div>
            <div className="flex p-8 shadow-xl rounded-xl">
                <input onChange={(e) => {fnUrl(e.target.value); setUrlAtual(e.target.value)}} type="text" className="rounded-l-xl w-96 outline-none text-black px-4"/>
                <Button isInputButton={true} fnClick={cliqueDetectar}/>
            </div>
        </div>
    )
}

export default Input