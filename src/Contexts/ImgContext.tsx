import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

const defaultValue = {
    img: "",
    setImg: () => null
}

type ContextType = {
    img: string,
    setImg: Dispatch<SetStateAction<string>>
}


export const imgContext = createContext<ContextType>(defaultValue)

export function ImgContextProvider({children}: {children: ReactNode}){
    const [img, setImg] = useState<string>("")
    
    return(
        <imgContext.Provider value={{img, setImg}}>
            {children}
        </imgContext.Provider>
    )
}

