import {ChangeEvent, useState} from "react";
import s from "./Test.module.css"
import {Divider, Slider} from "@mui/material";

export const Test = () => {

    const [length, setLength] = useState(0)

    const input = <input className={s.input}/>

    const [inputs, setInputs] = useState([[
        <input className={s.input}/>,
    ]])

    const inputLength = () => {
        // const [length, setLength] = useState('1')
        // return setLength('1')
        return ''
    }


    const addInput = (value: any) => {
        let input = [<input className={inputLength()}/>]
        let newInput = [...inputs,input]
        setInputs(newInput)
    }



    return (
        <div>
            <form>
                <div>
                    <input placeholder={'length'} value={length}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => {
                               setLength(+event.currentTarget.value)
                           }}
                    />
                </div>
                <div>
                    <button onClick={() => {addInput(length)}}>Save</button>
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