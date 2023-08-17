import Tilt from "react-parallax-tilt"

function Logo(){
    return (
        <div className="flex justify-start px-10 relative z-10">
            <Tilt tiltMaxAngleX={60} tiltMaxAngleY={60}>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-36 h-36 mt-5 rounded-xl shadow-2xl p-6 flex items-center justify-center text-center">
                    passe o mouse aqui!
                </div>
            </Tilt>
        </div>
    )
}

export default Logo