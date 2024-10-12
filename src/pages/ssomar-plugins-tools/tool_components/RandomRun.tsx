import { createContext, useState } from "react"
import { CommandInputBox } from "./random_run_components/CommandInputBox"


export const InputBoxListContext = createContext<number>(0)

export const RandomRun = () => {

    // Testing Area
    /*
    type CommandInputBoxDetails = {
        id: number
        chance: number | null
        commandText: string | null
    }
    */
    // Testing Area

    // Stores all valid input boxes
    const [inputBoxIdList, setInputBoxIdListValues] = useState([0, 1, 2, 3])
    const [numberOfBoxesMade, raiseBoxMadeCounter] = useState(inputBoxIdList.length)

    // Purpose of this is to store all valid input boxes. 
    // Uses ranges from:
    // - checking how many boxes are present to analyze if the delete button can exist

    // Usually called by the CommandInputBox component so when it re-renders, it just not renders the "deleted" component
    function deleteBox(id: number) {
        setInputBoxIdListValues(
            inputBoxIdList.filter(item => item !== id)
        )
    }

    function addBox() {
        raiseBoxMadeCounter(numberOfBoxesMade + 1)
        inputBoxIdList.push(
            numberOfBoxesMade
        )
    }

    return (
        <div className="border-4 border-blue-500 absolute w-full h-full">
        <div>
            <button className="text-3xl text-black font-minecraft bg-white m-4 border-4 border-blue-800 relative" onClick={() => addBox()}>
                <div className={`button-color-change-interaction_forWhiteBG`}>&nbsp;</div>
                <span className="pl-2 pr-1">Create New Command Line</span>
            </button>
        </div>
        <hr className="h-2 bg-blue-800 w-full border-1 border-black" />
        <InputBoxListContext.Provider value={inputBoxIdList.length}>
        <div className="w-full h-96 overflow-auto relative"> {/*Mainly used to create an outer padding*/}
                <div className="font-minecraft text-3xl h-full text-blue-100 absolute w-full">
                    {
                        inputBoxIdList.map((id) => {return (
                            <CommandInputBox key={id} id={id} onClickFunction={() => deleteBox(id)} />
                        )})
                    }
                </div>
        </div>
        </InputBoxListContext.Provider>
        <hr className="h-2 mb-2 bg-blue-800 w-full border-1 border-black" />
        <span className=" text-3xl font-minecraft pl-2 ml-2 pr-1 border-4 border-blue-800 text-white relative">Output</span><br />
        <textarea className="bg-white mt-2 w-full h-48 pl-2 font-minecraft text-3xl" spellCheck={false} readOnly placeholder="Output will be displayed here"></textarea>
        </div>
    )
}
