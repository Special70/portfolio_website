import { Link } from 'react-router-dom'
import { createContext, useState } from "react";

import { SCore_Editor_Interface } from './SCore_Editor_Interface'
import { SCore_Editor_ButtonManager } from './SCore_Editor_ButtonManager'

import backgroundImage from '../../assets/images/ssomar-tools-website_main_background-image.png'

// This context type is mainly for knowing which menu got selected and to share the useState to other components inside the context provider tag
type CurrentToolContextType = { 
    currentToolMenu: string | null // Stores the "id" of the selected button
    setCurrentToolMenu: React.Dispatch<React.SetStateAction<string | null>> // Stores the useState function for the other components to use
}

export const CurrentTooolContext = createContext({} as CurrentToolContextType) // For sharing the information across child components
export const SCore_Editor = () => {
    // useState for modifying what current tool menu would it be (IF POSSIBLE, ADD RESTRICTIONS TO WHAT VALUES IT COULD HAVE. MAKE IT BASED ON THE buttonList variable of SCore_Editor_ButtonManager.tsx)
    const [currentToolMenu, setCurrentToolMenu] = useState<string | null>(null)

    return (
        <CurrentTooolContext.Provider value={{currentToolMenu, setCurrentToolMenu}}>
        
        <div className="w-1/8 fixed ml-5 h-screen"> {/*mainly used to be able to properly place the back button*/}
            <div className="bottom-24 absolute w-36 text-center border-8 border-blue-950 font-minecraft text-5xl bg-blue-200 ">
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
        <div className="w-4/5 m-auto bg-black border-8 border-blue-900 h-screen max-h-px300 p-10 flex flex-row viewport<=1200px:flex-col">
            <div className="bg-slate-400 flex-row w-1/5 viewport<=1200px:w-full p-4 m-4 border-4 border-blue-900 flex">
                <SCore_Editor_ButtonManager />
            </div>
            <div className="w-4/5 viewport<=1200px:w-full bg-slate-900 m-4 border-4 border-blue-900 relative overflow-auto" id="SCore_Editor_Interface">
                <SCore_Editor_Interface />
            </div>
        </div>
        </CurrentTooolContext.Provider>
        
    )
}