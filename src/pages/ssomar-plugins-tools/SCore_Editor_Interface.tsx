import {useContext} from "react"
import { CurrentTooolContext } from "./SCore_Editor"
import { PlaceholderComponentPage } from "./tool_components/PlaceholderComponentPage"
import { RandomRun } from "./tool_components/RandomRun"
import { ForLoop } from "./tool_components/ForLoop"
import { YawPitchOffset } from "./tool_components/YawPitchOffset"



export const SCore_Editor_Interface = () => {

    const currentToolToDisplay = useContext(CurrentTooolContext)

    function displayMenu() {
        switch(currentToolToDisplay.currentToolMenu) {
            case "0": return <RandomRun />
            case "1": return <ForLoop />
            case "2": return <YawPitchOffset />
            
            default: {
                return <PlaceholderComponentPage />
            }
        }
    }

    return (
        displayMenu()
    )
}