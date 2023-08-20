
type Props = {
    width: string,
    height: string,
    top: string,
    left: string
}

function Box({width, height, top, left}: Props){
    return (
        <div style={{width, height, top, left, border: "3px solid #00f", position: "absolute"}}></div>
    )
}

export default Box