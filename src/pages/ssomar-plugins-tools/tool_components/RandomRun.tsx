import { createContext, useEffect, useState } from "react"
import { CommandInputBox } from "./random_run_components/CommandInputBox"

//

type InputBoxValuesContextType = {
    inputBoxIdList: number[] | null // Stores the unique ids of each command input box (very significant when it comes to the "key" value of each command input box and to make sure the correct command input box is deleted if done so)
    rateValues: number[] | null // Stores rate values for output display
    setRateValues: React.Dispatch<React.SetStateAction<number[] | null>> // useState setfunction for rate values
    commandValues: string[] | null // Stores command values for output display
    setCommandValues: React.Dispatch<React.SetStateAction<string[] | null>> // useState setfunction for command values
    refreshTextArea: React.Dispatch<React.SetStateAction<string | null>> // useState setfunction for the actual output text
}

// Used to track how many command input boxes are present so if it goes down to 1 input box, you can't delete any more of it unless you create another one
export const CurrentBoxCountContext = createContext<number>(0)  
// For sharing information based on the context type used
export const InputBoxValuesContext = createContext({} as InputBoxValuesContextType)


export const RandomRun = () => {
    // Instantly create 3 command input boxes
    const [inputBoxIdList, setInputBoxIdListValues] = useState([0, 1, 2])
    // Default values for the 3 command input boxes
    const [rateValues, setRateValues] = useState<number[] | null>([0, 0, 0]) // Stores rate values
    const [commandValues, setCommandValues] = useState<string[] | null>(["", "", ""])
    // Checks the number of boxes made throughout the session.
    // It allows creation of unique ids to make sure things wont break when users create/remove command input boxes.
    const [numberOfBoxesMade, raiseBoxMadeCounter] = useState(inputBoxIdList.length)

    // For every render, it creates command input boxes. Amount depends on the input box id list variable
    const componentContainer = inputBoxIdList.map((id) => {return (
        <CommandInputBox 
            key={id} 
            id={id} 
            onClickFunction={() => deleteBox(id)} // Inserting a function to delete itself

            />
    )})

    // Used to correctly delete the target command input box
    function deleteBox(id: number) {
        const targetIndex = inputBoxIdList.indexOf(id)
        
        setInputBoxIdListValues( removeItem(inputBoxIdList ,targetIndex) )
        setRateValues( removeItem(rateValues ,targetIndex) )
        setCommandValues( removeItem(commandValues ,targetIndex) )
    }

    // How does this delete the target value?
    // - It iterates through the passed array and adds it to the new array, but
    //   if the value-to-remove is found, it's not going to be added to the new array.
    //   Once done making the new array, it returns that new array.
    function removeItem(array: any, indexToDelete: number) {
        let newArray = []
        for (let i = 0; i < array.length; i++) {
            if (i == indexToDelete) {continue}
            newArray.push(array[i])
        }
        return newArray
    }

    // Raises the numberOfBoxesMade value by 1 so it could create another unique box id
    function addBox() {
        raiseBoxMadeCounter(numberOfBoxesMade + 1)
        inputBoxIdList.push(
            numberOfBoxesMade
        )
        // Inserts default values to the rateValues and commandValues array
        rateValues?.push(0)
        commandValues?.push("")
        
    }

    // Mainly used to modify the output field's value
    const [textAreaValue, setTextAreaValue] = useState("")

    // Calls the refreshTextArea() 
    useEffect(() => {
        refreshTextArea()
    })
    
    // The reason why this function had to exist is to be able to manually refresh the output field if useEffect fails to run in certain times
    function refreshTextArea() {
        setTextAreaValue(OutputFormatter_RandomRun())
    }
    
    const OutputFormatter_RandomRun = () => {
        // Main variable for building the desired text to print
        let mainReturnTextBuilder = ""
        
        inputBoxIdList?.map((obj, index) => {
            // To make the compiler shut up when building the app
            obj // I am not skilled enough to know how to just get the frkn index while leave the obj var unused

            // Creates the text for building a command section for this input box
            let returnTextBuilder = ""
            // Grabs the rate value from the correct input box
            const inputRate: number = rateValues == undefined ? 0 : rateValues[index]
            // Grabs the command value from the correct input box
            const inputCommand: string = commandValues == undefined ? "" : commandValues[index]


            // Prevents text building if command field is blank
            if (inputCommand.length <= 0) {
                return
            }

            // Uses an array to easily "design" the text to print
            const returnText = [
                `    - 'RANDOM RUN: ${inputRate}'\n`,
                `    - ${inputCommand}\n`,
                `    - RANDOM END\n`
            ]
            // Starts building the text
            for (let i = 0; i < returnText.length; i++) {
                returnTextBuilder += returnText[i]
            }
            
            // Adds the finished text to the main text variable
            mainReturnTextBuilder += returnTextBuilder
            
        })
        // Returns the finished product
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
        <CurrentBoxCountContext.Provider value={inputBoxIdList.length}>
        <div className="w-full h-96 overflow-auto relative"> {/*Mainly used to create an outer padding*/}
                <div className="font-minecraft text-3xl h-full text-blue-100 absolute w-full">
                    {
                        componentContainer
                    }
                </div>
        </div>
        </CurrentBoxCountContext.Provider>
        </InputBoxValuesContext.Provider>
        <hr className="h-2 mb-2 bg-blue-800 w-full border-1 border-black" />
        <div className="flex flex-row">
        
            <button className="text-3xl text-black font-minecraft bg-white m-4 border-4 border-blue-800 relative">
                <div className={`button-color-change-interaction_forWhiteBG`}>&nbsp;</div>
                <span className="pl-2 pr-1">Reset Rate Fields</span>
            </button>
            <button className="text-3xl text-black font-minecraft bg-white m-4 border-4 border-blue-800 relative">
                <div className={`button-color-change-interaction_forWhiteBG`}>&nbsp;</div>
                <span className="pl-2 pr-1">Balance Rate Fields</span>
            </button>
        </div>
        <textarea className="bg-white mt-2 pt-2 w-4/5 m-auto block border-8 border-blue-500 h-48 pl-2 font-minecraft text-3xl leading-6" spellCheck={false} defaultValue={textAreaValue} readOnly placeholder="Output will be displayed here" />
        </div>
    )
}
