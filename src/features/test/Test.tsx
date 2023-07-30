import {ChangeEvent, useState} from "react";
import s from "./Test.module.css"
import {Slider} from "@mui/material";

export const Test = () => {

    const [value, setValue] = useState(0)

    const saveDimensions = () => {

        console.log("success")
    }

return (
    <div>
        <form>
    <div>
        <input placeholder={'length'} value={value}
               onChange={(event: ChangeEvent<HTMLInputElement>)=>{
            setValue(+event.currentTarget.value)}}
        />
    </div>
        {/*<div className = {s.slider}>*/}
        {/*    <Slider onChange={saveDimensions}/>*/}
        {/*</div>*/}
        <div>
    <button onClick={saveDimensions}>Save</button>
        </div>
        </form>
        <div className={s.block}>
            {value}
        </div>
        <div className={s.line}>
        </div>
    </div>
)
}