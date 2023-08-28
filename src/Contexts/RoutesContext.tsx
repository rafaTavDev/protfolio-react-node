import { createContext, useState, Dispatch, SetStateAction, ReactNode, MouseEventHandler } from "react";

type routesContextType = {
    route: string,
    setRoute: Dispatch<SetStateAction<string>>
}

const defaultValue = {
    route: "SignIn",
    setRoute: () => null
}

export const routesContext = createContext<routesContextType>(defaultValue)

export function RoutesContextProvider({children}: {children: ReactNode}){
    const [route, setRoute] = useState("SignIn")

    return (
        <routesContext.Provider value={{route, setRoute}}>
            {children}
        </routesContext.Provider>
    )
}