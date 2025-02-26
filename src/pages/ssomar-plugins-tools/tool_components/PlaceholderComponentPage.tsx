import { useContext } from "react"
import { CurrentTooolContext } from "../SCore_Editor"

export const PlaceholderComponentPage = () => {

    const currentToolToDisplay = useContext(CurrentTooolContext)
    
    return (

        // This component serves as a "Error 404" page for tools that have yet to be made.
        // Nothing else.

        // The purpose of the "undefined" option is to tell the user what to do because when loading the component the first time, the currentToolMenu variable value is none.
        // The purpose of the second message is to remind the user that the selected tool isn't available yet 
            // (This scenario only occurs if the developer makes more buttons but hasn't made a case statemet in the switch block (see SCore_Editor_Interface.tsx) )
        <div className="w-full h-full bg-slate-500 flex overflow-hidden flex-nowrap text-responsive-regular viewport<=1000px:text-responsive-small leading-2 text-white text-center font-minecraft p-10">
            {currentToolToDisplay.currentToolMenu == undefined ? "Please select an option at the left side to open an editor to use. Hover at each button for more information" : "This feature has yet to be developed. Please select a different tool for now."}
        </div>
        
    )
}