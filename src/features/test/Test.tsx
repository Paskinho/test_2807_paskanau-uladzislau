import React from 'react';
import {ChangeEvent, useState} from "react";
import s from "./Test.module.css"
import {Divider, Slider} from "@mui/material";


// type TestPropsType = {
//     inputId: string
// }



export const Test = () => {

    const [length, setLength] = useState(0)


    const [inputs, setInputs] = useState([[
        <input size={0} className={s.input}/>,
    ]])

    const removeBlock = () => {
        // setInputs(inputs.filter(il => il.id))
       console.log('delete success')
    }


    let input = [<input className={s.backlightInput}
                        onChange={removeBlock}
                        onDoubleClick={removeBlock}
                        size={length}/>]


    const addInput = (length: number) => {
        let newInput = [...inputs, input]
        setInputs(newInput)
    }


    return (
        <div>

            <div>
                <input placeholder={'length'} value={length}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => {
                           setLength(+event.currentTarget.value)
                       }}
                />
            </div>
            <div>
                <button onClick={() => {
                    addInput(length)
                }}>Save
                </button>
            </div>
            <div className={s.block}>
                {inputs}
            </div>
            <div className={s.line}>
            </div>
            <div>
            </div>
        </div>
    )
}