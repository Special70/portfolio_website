import { useContext } from "react"
import { CurrentTooolContext } from "../SCore_Editor"

export const PlaceholderComponentPage = () => {

    const currentToolToDisplay = useContext(CurrentTooolContext)
    
    return (
        
        <div className="w-full h-full bg-gray-700 text-6xl text-white text-center items-center font-minecraft p-10">
            {currentToolToDisplay.currentToolMenu?.type == undefined ? "Please select an option at the left side to open an editor to use" : "This feature has yet to be developed. Please select a different tool for now."}
        </div>
        
    )
}