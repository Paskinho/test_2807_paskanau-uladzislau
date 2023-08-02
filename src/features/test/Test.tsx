import React from 'react';
import {ChangeEvent, useState} from "react";
import s from "./Test.module.css"
import {Divider, inputClasses, Slider} from "@mui/material";
import { v1 } from 'uuid';


// type TestPropsType = {
//     inputId: string
// }


type InputType = {
    id: string,
    input: string
}


export const Test = () => {

    const [length, setLength] = useState(0)


    const [inputs, setInputs] = useState([
        {id: v1(), input: <input size={0} className={s.input}/>}
        // <input size={0} className={s.input}/>,
    ])


    const removeBlock = (id: any) => {

        let filteredInputs = inputs.filter(input => input.id !== id)
        setInputs(filteredInputs)
        // delete inputs[id]
        // delete inputs[id]
        // setInputs(inputs.filter(il => il))
        //  return inputs.splice(0,id) // уточнять
        // console.log('delete success')
    }


    const fixed = ''


    const addInput = (length: number) => {
        let input = {id: v1(), input:<input className={s.backlightInput}
                            value={fixed}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                setLength(+event.currentTarget.value)
                            }}
                            onDoubleClick={removeBlock}
                            size={length}/>}
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
                {inputs.map(tl => tl.input)}
            </div>
            <div className={s.line}>
            </div>
            <div>
            </div>
        </div>
    )
}