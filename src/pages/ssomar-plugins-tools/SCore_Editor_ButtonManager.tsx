import { useContext } from "react"
import { CurrentTooolContext } from "./SCore_Editor";


// To add a new button to the left side of the SCore editor website, add more text to this string list.
const buttonList: string[] = [
    "RANDOM RUN",
    "FOR LOOP",
    "\"^ ^ ^\" GENERATOR"
]

export const SCore_Editor_ButtonManager = () => {
    
    const currentToolVar = useContext(CurrentTooolContext);
    const changeMenu = (id: string) => {currentToolVar.setCurrentToolMenu(id)}

    return (
        <div>
            {/* Iterates through the buttonList variable */}
            {buttonList.map((item, index) => { // item : button name; index: index;
                // Then creates a button tag with the necessary features:
                return (
                    <button key={index} className={
                        // Checks if this is really the selected button. Normal buttons would have the "score_button" class but if the button is the selected one, it would have the "score_button-selected" class.
                        // Q : How is a button selected code-wise ?
                        // A : Each button made from the buttonList variable would have their own changeMenu() function where their button name is passed to it. 
                        //  Meaning, if you click a button made from the buttonList variable, it will change the currentToolMenu variable value based on the button's name 
                        (JSON.stringify(index) == currentToolVar.currentToolMenu) ? "score_button-selected text-center z-10 relative" : "score_button text-center z-10 relative"} 
                        id={JSON.stringify(index)} onClick={() => 
                            // The button name is passed inside the changeMenu() so the website knows which button got pressed
                            changeMenu(JSON.stringify(index)) 
                        }>
                            <div className="button-color-change-interaction">&nbsp;</div>
                            {item}</button>
                    
                )
            })}
        </div>
    )
}