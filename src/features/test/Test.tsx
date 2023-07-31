import {ChangeEvent, useState} from "react";
import s from "./Test.module.css"
import {Divider, Slider} from "@mui/material";

export const Test = () => {

    const [value, setValue] = useState(0)

    const input = <input className={s.input}/>

    const [inputs, setInputs] = useState([[
        <input className={s.input}/>,
        <input className={s.input}/>,
        <input className={s.input}/>,
    ]])

    const addInput = () => {
        let input = [<input/>]
        let newInput = [...inputs,input]
        setInputs(newInput)
    }


    const saveDimensions = () => {
        console.log("success")
        return (
            <div>
        <input> </input>
        </div>
        )
    }

    return (
        <div>
            <form>
                <div>
                    <input placeholder={'length'} value={value}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => {
                               setValue(+event.currentTarget.value)
                           }}
                    />
                </div>
                <div>
                    <button onClick={addInput}>Save</button>
                </div>
            </form>
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