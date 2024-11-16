import { useState, useEffect } from "react"

export const YawPitchOffset = () => {

    const [xOffset, setXOffset] = useState(0)
    const [yOffset, setYOffset] = useState(0)
    const [zOffset, setZOffset] = useState(0)
    const [outputText, setOutputText] = useState("")

    function writeOutput() {
        // Stores the output in a string
        let outputStringBuilder = ""

        // Uses an array to easily write the output (in a dev's pov)
        let outputArray = [
            `%math_{player_x_long} + (${zOffset} * cos({player_pitch}*-1) * sin({player_yaw}*-1)) + (${xOffset} * cos({player_yaw}*-1))%`,
            `%math_{player_y_long} + (${zOffset} * sin({player_pitch}*-1)) + (${yOffset})%`,
            `%math_{player_z_long} + (${zOffset} * cos({player_pitch}*-1) * cos({player_yaw}*-1)) - (${xOffset} * sin({player_yaw}*-1))%`
        ]

        outputArray.map((text) => {
            outputStringBuilder += text
        })

        setOutputText(outputStringBuilder)
    }

    // For refreshing the output bar in repeat
    useEffect(() => {
        writeOutput();
    })

    return (
        <>
        <div className="grid grid-cols-2 grid-rows-4 m-4 font-minecraft text-5xl gap-4">
            <span className="text-white">X Offset: </span>
            <input className="pl-2 mr-2" type="number" defaultValue="0" onChange={(event) => {
                    // If the number that is being submitted is lower than 0 or number is NaN, forcefully change the value to 0.
                    if (Number.parseInt(event.target.value) < 0 || isNaN(Number.parseInt(event.target.value))) {
                        event.target.value = "0"
                    }
                    setXOffset(Number.parseInt(event.target.value))
                    // Mainly to remove the excess zeroes when typing a number input
                    event.target.value = String(Number(event.target.value))
            }}/>

            <span className="text-white">Y Offset: </span>
            <input className="pl-2 mr-2" type="number" defaultValue="0" onChange={(event) => {
                    // If the number that is being submitted is lower than 0 or number is NaN, forcefully change the value to 0.
                    if (Number.parseInt(event.target.value) < 0 || isNaN(Number.parseInt(event.target.value))) {
                        event.target.value = "0"
                    }
                    setYOffset(Number.parseInt(event.target.value))
                    // Mainly to remove the excess zeroes when typing a number input
                    event.target.value = String(Number(event.target.value))
            }}/>

            <span className="text-white">Z Offset: </span>
            <input className="pl-2 mr-2" type="number" defaultValue="0" onChange={(event) => {
                    // If the number that is being submitted is lower than 0 or number is NaN, forcefully change the value to 0.
                    if (Number.parseInt(event.target.value) < 0 || isNaN(Number.parseInt(event.target.value))) {
                        event.target.value = "0"
                    }
                    setZOffset(Number.parseInt(event.target.value))
                    // Mainly to remove the excess zeroes when typing a number input
                    event.target.value = String(Number(event.target.value))
            }}/>
        </div>

        <hr className="h-2 mb-2 bg-blue-800 w-full border-1 border-black" />
            <span className="text-white text-5xl block text-center font-minecraft">Output</span>
            <textarea value={outputText} className="w-4/5 block m-auto border-4 mb-10 border-blue-500 bg-white text-black font-minecraft text-2xl h-1/3 leading-5 pl-2 pt-2" readOnly 
                placeholder="Output is displayed here"
                />
        </>
    )
}