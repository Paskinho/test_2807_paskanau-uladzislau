import React from 'react';
import {ChangeEvent, useState} from "react";
import s from "./Test.module.css"
import {v1} from 'uuid';


// type TestPropsType = {
//     inputId: string
// }


type InputType = {
    id: string,
    input: any
}


export const Test = () => {

    const [length, setLength] = useState(0) // создаём стейт для длины инпуты с инициализационным значением 0


    const [inputs, setInputs] = useState([
        {id: v1(), input: ''}
    ]) // создаём массив инпутов


    const removeBlock = (id: any) => {

        // delete inputs[id]
        // setInputs(deleteBlock)
        let filteredInputs = inputs.filter(input => input.id !== id)
        setInputs(filteredInputs)
    } // удаление блока(инпута), фильтруем массив инпутов для удаление нужного, сетаем значение в стейт

    const fixed = '' // переменная для того, чтобы нельзя корректировать инпут

    const addInput = (length: number) => {
        let input: InputType = {
            id: v1(), input: <input className={s.backlightInput}
                                    value={fixed} // передаём в инпут фиксируемое значение

                                    onDoubleClick={removeBlock} // передаём функцию удаления блока
                                    size={length}
            />
        } // новый блок
        let newInput = [...inputs, input] // добавляем в массив новый блок
        setInputs(newInput) //сетаем его в стейт
    } // функция для добавления блока/инпута


    return (
        <div>
            <div>
                <input placeholder={'length'} value={length}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => {
                           setLength(+event.currentTarget.value)
                       }}
                       onKeyPress={(event) => {
                           if (event.key === "Enter") {
                               addInput(length)
                           }
                       }}
                />
            </div>

            <div>
                <button className={s.button}
                        onClick={() => {
                            addInput(length)
                        }}
                >Save
                </button>
            </div>
            <div className={s.block}>
                {inputs.map(tl => tl.input)}
            </div>
            <div className={s.line}>
            </div>
        </div>
    )
}