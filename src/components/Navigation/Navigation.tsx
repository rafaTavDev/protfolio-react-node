
type Props = {
    onChangeRoute: (param1: string) => void
}

function Navigation({onChangeRoute}: Props){
    return(
        <div className="flex justify-end text-xl">
            <div onClick={() => onChangeRoute("SignIn")} className=" underline hover:cursor-pointer p-4">Sign Out</div>
        </div>
    )
}

export default Navigation