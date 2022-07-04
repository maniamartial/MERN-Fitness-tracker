import {createContext} from "react";
export const WorkoutsContext=createContext();

export const WorkoutsContextProvider=({children})=>{
    return(
        <WorkoutsContextProvider>
            {children}
        </WorkoutsContextProvider>
    )
}