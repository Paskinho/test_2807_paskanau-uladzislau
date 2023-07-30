import {useState} from "react";

export const Test = () => {

    const [test, setTest] = useState(0)

return (
    <div>
    <div>
        <input placeholder={'length'}/>
    </div>
        <div>
    <button>Save</button>
        </div>
    </div>
)
}