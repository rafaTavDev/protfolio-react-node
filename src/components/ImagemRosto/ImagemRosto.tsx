import { useState, useContext } from "react"
import { imgContext } from "../../Contexts/ImgContext"



function ImagemRosto(){
    const {img, setImg} = useContext(imgContext)

    return (
        <div className="bg-black w-100 h-auto">
            <img src={img} alt="" className="w-full h-auto" />
        </div>
    )
}

export default ImagemRosto