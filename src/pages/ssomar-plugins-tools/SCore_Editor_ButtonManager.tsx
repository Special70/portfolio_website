import { useContext } from "react"
import { CurrentTooolContext } from "./SCore_Editor";


// To add a new button to the left side of the SCore editor website, add more text to this string list.
// Format: ["button name", "button description"]
const buttonList: string[][] = [
    ["RANDOM RUN",
        "For writing RNG-based command executions. Helpful for especially people who are not very good at math"],
    ["FOR LOOP",
        "For writing series of text or numbers with ease"
    ],
    ["\"^ ^ ^\" GENERATOR",
        "For writing a math expansion formula of the vanilla ^ ^ ^ symbols. Mainly used for other plugins that can't use the ^ ^ ^ symbols"
    ],
    ["Command YAML Validator",
        "If you are unsure if your text would not break when inside of a commands editor, paste it here!"
    ]
]

export const SCore_Editor_ButtonManager = () => {
    
    const currentToolVar = useContext(CurrentTooolContext);
    const changeMenu = (id: string) => {currentToolVar.setCurrentToolMenu(id)}

    return (
        <div className="flex flex-col viewport<=1200px:flex-row gap-2 overflow-hidden viewport<=1200px:overflow-x-scroll">
            {/* Iterates through the buttonList variable */}
            {buttonList.map((item, index) => { // item : button name; index: index;
                // Then creates a button tag with the necessary features:
                return (
                    <div className="relative flex flex-row group" key={index}>
                        <button className={
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
                            <span className="p-2">{item[0]}</span></button>
                            
                        <div className="mb-2 left-full viewport<=1200px:top-full viewport<=1200px:-left-3/4 ml-5 p-5 hidden group-hover:block bg-slate-800 text-white font-minecraft text-responsive-small w-2full absolute z-20">
                        {item[1]}
                        </div>
                    </div>
                    
                )
            })}
        </div>
    )
}