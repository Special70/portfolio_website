import { useContext} from "react"
import { InputBoxListContext } from "../RandomRun"

type Props = {
    id: number
    onClickFunction: () => void
}

export const CommandInputBox = ({onClickFunction}: Props) => {

    const numberOfInputBoxes = useContext(InputBoxListContext)



    return (
        <>
        <div className="flex flex-col w-full">
            <div className="h-1/2 w-full text-3xl mb-2 w-full">
                <span className="pl-2">CHANCE:</span> <input type="number" className="border-4 border-blue-800 w-1/4 text-black pl-2 h-8" defaultValue={0} min={0}></input> <button onClick={onClickFunction} className={`border-4 border-blue-800 bg-white text-black relative ${numberOfInputBoxes > 1 ? "" : "hidden"}`}>
                <div className={`button-color-change-interaction_forWhiteBG`}>&nbsp;</div>
                    <span className="pl-3 pr-2">X</span></button>
            </div>
            <div className="h-1/2 w-full">
                <textarea className={`bg-white w-full text-3xl border-4 border-blue-800 pl-2 pt-2 text-black h-24 leading-5`} spellCheck={false} placeholder={`COMMAND (without /)`}></textarea>
            </div>
        </div>
        </>
    )
}