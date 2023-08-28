
type Props = {
    onChangeRoute: (param1: string) => void
}

function Register({onChangeRoute}: Props){
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="px-8 py-16 flex flex-col items-center gap-4 shadow-xl h">
                <div className="text-3xl text-black">Se cadastre</div>
                <input type="text" className="rounded-xl border-2 border-black bg-transparent p-3 outline-none placeholder-black w-96 text-black" placeholder="nome" />
                <input type="text" className="rounded-xl border-2 border-black bg-transparent p-3 outline-none placeholder-black w-96 text-black" placeholder="email" />
                <input type="text" className="rounded-xl border-2 border-black bg-transparent p-3 outline-none placeholder-black w-96 text-black" placeholder="senha" />
                <button onClick={() => {onChangeRoute("SignIn")}} className="bg-pink-500 px-8 py-4 rounded-xl">Cadastrar</button>
            </div>
        </div>
    )
}

export default Register