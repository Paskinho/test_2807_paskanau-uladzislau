import {useState} from "react";
// import {Slider} from "@mui/material";

export const Test = () => {

    const [test, setTest] = useState(0)

    const saveDimensions = () => {
        console.log("success")
    }

return (
    <div>
    <div>
        <input placeholder={'length'}/>
    </div>
        {/*<div>*/}
        {/*    <Slider/>*/}
        {/*</div>*/}
        <div>
    <button onClick={saveDimensions}>Save</button>
        </div>
    </div>
)
}