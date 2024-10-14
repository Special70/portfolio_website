import { useContext } from "react"
import { CurrentTooolContext } from "./SCore_Editor";

const buttonList = [
    "RANDOM RUN",
    "LOOP START",
    "\"^ ^ ^\" GENERATOR"
]

export const SCore_Editor_ButtonManager = () => {
    
    const currentToolVar = useContext(CurrentTooolContext);
    const changeMenu = (id: string) => {currentToolVar.setCurrentToolMenu(id)}

    return (
        <div>
            {buttonList.map((item, index) => {
                return (
                    <button key={index} className={
                        (JSON.stringify(index) == currentToolVar.currentToolMenu) ? "score_button-selected text-center z-10 relative" : "score_button text-center z-10 relative"} 
                        id={JSON.stringify(index)} onClick={() => changeMenu(JSON.stringify(index)) }>
                            <div className="button-color-change-interaction">&nbsp;</div>
                            {item}</button>
                    
                )
            })}
        </div>
    )
}