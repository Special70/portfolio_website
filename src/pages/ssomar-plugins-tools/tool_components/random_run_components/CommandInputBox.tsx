import { useContext, useState} from "react"
import { CurrentBoxCountContext, InputBoxValuesContext } from "../RandomRun"

type Props = {
    id: number
    onClickFunction: () => void
}

export const CommandInputBox = ({id, onClickFunction}: Props) => {

    const numberOfInputBoxes = useContext(CurrentBoxCountContext)
    const inputBoxValuesProperties = useContext(InputBoxValuesContext)
    
    const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newRateValues: number[] = []
        inputBoxValuesProperties.rateValues?.forEach((val) => {
            newRateValues.push(val)
        })
        newRateValues[
            inputBoxValuesProperties.inputBoxIdList != null ? inputBoxValuesProperties.inputBoxIdList.indexOf(id) : 0 
        ] = Number.parseInt(event.target.value)

        inputBoxValuesProperties.setRateValues(newRateValues)
    }

    const handleCommandChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newCommandValues: string[] = []
        inputBoxValuesProperties.commandValues?.forEach((val) => {
            newCommandValues.push(val)
        })
        newCommandValues[
            inputBoxValuesProperties.inputBoxIdList != null ? inputBoxValuesProperties.inputBoxIdList.indexOf(id) : 0 
        ] = event.target.value 

        inputBoxValuesProperties.setCommandValues(newCommandValues)
    }

    return (
        <>
        <div className="flex flex-col w-full">
            <div className="h-1/2 w-full text-3xl mb-2 flex flex-row">
                <div className="pt-2">
                <span className="pl-2 pr-2">CHANCE:</span> 
                <input type="number" className="border-4 border-blue-800 w-24 text-black pl-2 h-auto mr-2" defaultValue={0} onChange={handleRateChange} min={0} />
                    <button onClick={onClickFunction} className={`border-4 border-blue-800 bg-white text-black relative ${numberOfInputBoxes > 1 ? "" : "hidden"}`}>
                    <div className={`button-color-change-interaction_forWhiteBG`}>&nbsp;</div>
                    <span className="pl-3 pr-2">X</span>
                </button>
                </div>
            </div>
            <div className="h-1/2 w-full">
                <textarea defaultValue={""} onChange={handleCommandChange} className={`bg-white w-full text-3xl border-4 border-blue-800 pl-2 pt-2 text-black h-24 leading-5`} spellCheck={false} placeholder={`COMMAND (without /)`}></textarea>
            </div>
        </div>
        </>
    )
}