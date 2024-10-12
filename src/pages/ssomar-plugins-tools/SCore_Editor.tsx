import { Link } from 'react-router-dom'
import { createContext, useState } from "react";

import { SCore_Editor_Interface } from './SCore_Editor_Interface'
import { SCore_Editor_ButtonManager } from './SCore_Editor_ButtonManager'

import backgroundImage from '../../assets/images/ssomar-tools-website_main_background-image.png'

type CurrentTool = {
    type: string
}

type CurrentToolContextType = { // Context Type
    currentToolMenu: CurrentTool | null
    setCurrentToolMenu: React.Dispatch<React.SetStateAction<CurrentTool | null>>
}

export const CurrentTooolContext = createContext({} as CurrentToolContextType) // For sharing the information across child components
export const SCore_Editor = () => {
    const [currentToolMenu, setCurrentToolMenu] = useState<CurrentTool | null>(null)

    return (
        <CurrentTooolContext.Provider value={{currentToolMenu, setCurrentToolMenu}}>
        
        <div className="w-1/8 fixed ml-5 h-screen"> {/*mainly used to be able to properly place the back button*/}
            <div className="bottom-24 absolute w-36 text-center border-8 border-blue-950 font-minecraft text-5xl bg-gray-700 ">
                <Link to="/ssomar-tools" className="">
                    <div className="button-color-change-interaction">&nbsp;</div>BACK
                </Link>
            </div>
        </div>

        <div className="w-screen h-screen bg-black fixed -z-50">
            <img src={backgroundImage} className="w-screen h-screen bg-black fixed -z-50 opacity-30 min-w-910px" />
        </div>
        <div className="mt-20">&nbsp;</div> {/*Moves the rest of the components downwards a bit*/}
        <div className="font-minecraft text-5xl text-white bg-gradient-to-r from-sky-500 to-blue-800 text-center p-5 border-b-8 border-blue-500 fixed w-screen z-50 top-0">SCore Commands Editor</div>
            <div className="w-4/5 m-auto bg-black border-8 border-blue-900 h-screen max-h-px300 p-10 flex flex-row">
                <div className="bg-slate-400 w-1/5 p-4 m-4 border-4 border-blue-900">
                    <SCore_Editor_ButtonManager />
                </div>
                <div className="w-4/5 bg-slate-900 m-4 border-4 border-blue-900 relative overflow-auto" id="SCore_Editor_Interface">
                    <SCore_Editor_Interface />
                </div>
        </div>
        </CurrentTooolContext.Provider>
        
    )
}