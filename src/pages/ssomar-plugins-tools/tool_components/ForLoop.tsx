import { useEffect, useState } from "react"


export const ForLoop = () => {
    /*
    How to read this heck of code as a developer?
    - keep the first 5 const useStates in mind. It will be very involved onwards
    - read the writeOutput() function line by line. after reading the first one, as much as possible, forget about it instantly to save memory in the mind (me, the dev cant retain loads of shit in my mind)
    - only retain whatever the comments tell you to remember onwards
     */

    // Defined what kind of input it is (this is important so the web app knows whether to add numerical value to the starting value or add extra characters to the right side)
    const [inputType, setInputType] = useState<string>("Number") /* If you have time, re-google how to add restrictions to this variable so it can only receive either "Number" or "String" value) */
    // The datatype for this is planned to be either string or number (if someone knows a better way to implement this, pls change ty. same goes for the next useState variable)
    // Starting value is stored here. Starting value input box's default value is based on this
    const [startingValue, setStartingValue] = useState<string | number>("2")
    // The value that's gonna be added to the starting value per iteration gets added here
    // Value Increase Per Iteration input box's default value is based on this
    const [valueIncreasePerIteration, setValueIncreasePerIteration] = useState<string | number>("5")
    // This lets the code know how many iterations should it perform
    const [numberOfElements, setNumberOfElements] = useState(0)
    // Stores the output-to-be-displayed in the textarea element
    const [outputDisplay, setOutputDisplay] = useState("")

    // Currently being executed per onChange. Might need to check performance issues if issues appear.
    function writeOutput() {
        
        // Prevent output if :
        if (numberOfElements <= 0) {return} /* Number of iterations is 0 or less */
        /* String length of either startingValue or valueIncreasePerIteration is 0 when inputType is string */
        if (inputType == "String") {
            if (String(startingValue).length <= 0) {
                return
            }
        } 
        // No need to check for conditions in the number field


        // If those 3 conditions above failed, start building the output for real

        // Initialize value containers
        let outputArray = [] // Builds the FOR loop by adding values in this list (you will see its usage as you read this function) (REMEMBER THIS THROUGHOUT THIS FUNCTION)
        let outputBuilderVar = {} as any; // Builds the value that gets pushed to the outputArray variable  

        /**
         * Q: Why is outputBuilderVar datatype set to "any"?
         * A: Tried to set it as 'String | number' but typescript won't shut up about errors and I have no clue how to properly make a 'String | number' variable.
         *  The real goal is to make the outputBuilderVar be capable of holding a string or number datatype because it is needed to be capable of holding both to make the output
         */

        
        // Sets the value type depending on the inputType value
        if (inputType == "String") { 
            // If input type is string, it makes the variable hold a string datatype
            outputBuilderVar = startingValue
        } else if (inputType == "Number") {
            // If input type is number, it makes the variable hold a number datatype
            outputBuilderVar = Number(startingValue)
        }
        // Done setting up the starting value

        // instantly add the starting value to the array
        outputArray.push(startingValue)
        
        // Start iteration
        for (let i = 1; i < numberOfElements; i++) {
            // Performs a value append/increase depending on the input type
            if (inputType == "String") {
                outputBuilderVar += String(valueIncreasePerIteration)
            } else if (inputType == "Number") {
                outputBuilderVar += Number(valueIncreasePerIteration)
            }
            // Finally, it pushes the value to the array
            outputArray.push(outputBuilderVar)
        }
        
        // Finally send the output to outputDisplay
        setOutputDisplay("FOR ["+outputArray.toString()+"] > for1")
        

    }

    // Refresh the output box per 
    useEffect(()=>{
        writeOutput()
    })

    return (
        
        <>
            <div className="grid grid-cols-2 grid-rows-4 m-4 font-minecraft text-5xl gap-4">
                <span className="text-white">Input Type: </span>
                <select className="pl-2 mr-2" onChange={(event) => {setInputType(event.target.value)}}>
                    <option>Number</option>
                    <option>String</option>
                </select>

                <span className="text-white">Starting value: </span>
                <input defaultValue={startingValue} type={inputType == "Number" ? "number" : "text"} className="pl-2 mr-2" placeholder={inputType == "Number" ? "Enter number value" : "Enter string value"} onChange={(event) => {
                    if (inputType == "Number") {
                        // If the number that is being submitted is lower than 0 or number is NaN, forcefully change the value to 0.
                        if (Number.parseInt(event.target.value) < 0 || isNaN(Number.parseInt(event.target.value))) {
                            event.target.value = "0"
                        }
                        // Sets the number value to the startingValue variable 
                        setStartingValue(Number.parseInt(event.target.value))
                        // Mainly to remove the excess zeroes when typing a number input
                        event.target.value = String(Number(event.target.value))
                    } else if (inputType == "String") {
                        // Sets the string value to the startingValue variable
                        setStartingValue(event.target.value);
                    }
                }}/>

                <span className="text-white">Value Increase per Iteration: </span>
                <input defaultValue={valueIncreasePerIteration} type={inputType == "Number" ? "number" : "text"} className="pl-2 mr-2" placeholder={inputType == "Number" ? "Enter number value" : "Enter string value"} onChange={(event) => {
                    if (inputType == "Number") {
                        // If the number that is being submitted is lower than 0 or number is NaN, forcefully change the value to 0.
                        if (Number.parseInt(event.target.value) < 0 || isNaN(Number.parseInt(event.target.value))) {
                            event.target.value = "0"
                        }
                        // Sets the number value to the valueIncreasePerIteration variable
                        setValueIncreasePerIteration(Number.parseInt(event.target.value))
                        // Mainly to remove the excess zeroes when typing a number input
                        event.target.value = String(Number(event.target.value))
                    } else if (inputType == "String") {
                        // Sets the string value to the valueIncreasePerIteration variable
                        setValueIncreasePerIteration(event.target.value);
                    }
                }}/>

                <span className="text-white">Number of Elements: </span>
                <input type="number" className="pl-2 mr-2" placeholder="Enter number value" defaultValue={numberOfElements} onChange={(event) => {
                    // If the number that is being submitted is lower than 0 or number is NaN, forcefully change the value to 0.
                    if (Number.parseInt(event.target.value) < 0 || isNaN(Number.parseInt(event.target.value))) {
                        event.target.value = "0"
                    }
                    // Sets the number of elements value 
                    setNumberOfElements(Number.parseInt(event.target.value))
                    // Mainly to remove the excess zeroes when typing a number input
                    event.target.value = String(Number(event.target.value))
                    
                    }} />
            </div>
            <hr className="h-2 mb-2 bg-blue-800 w-full border-1 border-black" />
            <span className="text-white text-5xl block text-center font-minecraft">Output</span>
            <textarea className="w-4/5 block m-auto border-4 border-blue-500 bg-white text-black font-minecraft text-2xl h-1/3 leading-5 pl-2 pt-2" readOnly 
                placeholder="Output is displayed here"
                value={outputDisplay}/>
        </>
    )
}
