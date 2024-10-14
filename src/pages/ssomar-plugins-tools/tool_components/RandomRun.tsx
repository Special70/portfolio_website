import { createContext, useEffect, useState } from "react"
import { CommandInputBox } from "./random_run_components/CommandInputBox"


type InputBoxValuesContextType = {
    inputBoxIdList: number[] | null 
    rateValues: number[] | null
    setRateValues: React.Dispatch<React.SetStateAction<number[] | null>>
    commandValues: string[] | null
    setCommandValues: React.Dispatch<React.SetStateAction<string[] | null>>
    refreshTextArea: React.Dispatch<React.SetStateAction<string | null>>
}

export const InputBoxListContext = createContext<number>(0)
export const InputBoxValuesContext = createContext({} as InputBoxValuesContextType)


export const RandomRun = () => {
    const [inputBoxIdList, setInputBoxIdListValues] = useState([0, 1, 2])
    const [rateValues, setRateValues] = useState<number[] | null>([0, 0, 0]) // Stores rate values
    const [commandValues, setCommandValues] = useState<string[] | null>(["", "", ""])
    
    const [numberOfBoxesMade, raiseBoxMadeCounter] = useState(inputBoxIdList.length) // Mainly used by command input boxes to identify if 

    const componentContainer = inputBoxIdList.map((id) => {return (
        <CommandInputBox 
            key={id} 
            id={id} 
            onClickFunction={() => deleteBox(id)} 

            />
    )})

    // Purpose of this is to store all valid input boxes. 
    // Uses ranges from:
    // - checking how many boxes are present to analyze if the delete button can exist

    // Usually called by the CommandInputBox component so when it re-renders, it just not renders the "deleted" component
    function deleteBox(id: number) {
        const targetIndex = inputBoxIdList.indexOf(id)
        setInputBoxIdListValues(
            [...inputBoxIdList.splice(0, targetIndex), ...inputBoxIdList.splice(targetIndex)]
        )
        const newRateValues: any = rateValues?.map((val) => {return (val)})
        setRateValues(
            [...newRateValues.splice(0, targetIndex), ...newRateValues.splice(targetIndex)]
        )
        const newCommandValues: any = commandValues?.map((val) => {return (val)})
        setCommandValues(
            [...newCommandValues.splice(0, targetIndex), ...newCommandValues.splice(targetIndex)]
        )
    }

    function addBox() {
        raiseBoxMadeCounter(numberOfBoxesMade + 1)
        inputBoxIdList.push(
            numberOfBoxesMade
        )
        rateValues?.push(0)
        commandValues?.push("")
        
    }

    const [textAreaValue, setTextAreaValue] = useState("")
    useEffect(() => {
        refreshTextArea()
    })
    
    function refreshTextArea() {
        setTextAreaValue(OutputFormatter_RandomRun())
    }
    
    const OutputFormatter_RandomRun = () => {
        let mainReturnTextBuilder = ""
        
        inputBoxIdList?.map((index) => {
            let returnTextBuilder = ""
            const inputRate: number = rateValues == null ? 0 : rateValues[index]
            const inputCommand: string = commandValues == null ? "" : commandValues[index]
            const returnText = [
                `    - 'RANDOM RUN: ${inputRate}'\n`,
                `    - ${inputCommand}\n`,
                `    - RANDOM END\n`
            ]

            for (let i = 0; i < returnText.length; i++) {
                returnTextBuilder += returnText[i]
            }
            if (inputCommand.length == 0) {
                return
            } else {mainReturnTextBuilder += returnTextBuilder}
            
        })

        return (mainReturnTextBuilder)
        
    }



    return (
        <div className="border-4 border-blue-500 absolute w-full h-full">
        <div>
            <button className="text-3xl text-black font-minecraft bg-white m-4 border-4 border-blue-800 relative" onClick={() => addBox()}>
                <div className={`button-color-change-interaction_forWhiteBG`}>&nbsp;</div>
                <span className="pl-2 pr-1">Create New Command Line</span>
            </button>
            <button className="text-3xl text-black font-minecraft bg-white m-4 border-4 border-blue-800 relative">
                <div className={`button-color-change-interaction_forWhiteBG`}>&nbsp;</div>
                <span className="pl-2 pr-1">Debug</span>
            </button>
        </div>
        <hr className="h-2 bg-blue-800 w-full border-1 border-black" />

        <InputBoxValuesContext.Provider value={{inputBoxIdList ,rateValues, setRateValues, commandValues, setCommandValues, refreshTextArea}}>
        <InputBoxListContext.Provider value={inputBoxIdList.length}>
        <div className="w-full h-96 overflow-auto relative"> {/*Mainly used to create an outer padding*/}
                <div className="font-minecraft text-3xl h-full text-blue-100 absolute w-full">
                    {
                        componentContainer
                    }
                </div>
        </div>
        </InputBoxListContext.Provider>
        </InputBoxValuesContext.Provider>
        <hr className="h-2 mb-2 bg-blue-800 w-full border-1 border-black" />
        <span className=" text-3xl font-minecraft pl-2 ml-2 pr-1 border-4 border-blue-800 text-white relative">Output</span><br />
        <textarea className="bg-white mt-2 pt-2 w-full h-48 pl-2 font-minecraft text-3xl leading-6" spellCheck={false} defaultValue={textAreaValue} readOnly placeholder="Output will be displayed here" />
        </div>
    )
}
