import Button from "../Button/button"

function Input(){
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="text-gray-800 text-xl">Coloque a url de uma imagem no input abaixo e detecte rostos em imagens:</div>
            <div className="flex p-8 shadow-xl rounded-xl">
                <input type="text" className="rounded-l-xl w-96 outline-none text-black px-4"/>
                <Button isInputButton={true}/>
            </div>
        </div>
    )
}

export default Input