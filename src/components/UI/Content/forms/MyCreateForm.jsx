import React, {useEffect, useState} from 'react';
import MyInput from "../../input/MyInput";
import MyButton from "../../button/MyButton";
import st from "./MyCreateForm.module.css"
import MySelect from "../../select/MySelect";
import {Frame_Mode, InputStyleConst} from "../../../../constant/Const";
import MyFormAlert from "../../alert/MyFormAlert";

const MyCreateForm = ({callback, form, frame_mode, visible}) => {

    // const [info, setInfo] = useState({
    //     "address": "Клепарівська 18",
    //     "electric_box": "1 поверх",
    //     "place_of_overlap": "5 поверх",
    //     "persons_with_disabilities": 0,
    //     "number_of_people": 70
    // })

    let disabled = false;
    if (frame_mode === Frame_Mode.READ) disabled = true;

    const rootClasses = [st.Rectangle]

    if (visible || visible == null){
        rootClasses.push(st.Visible)
    }

    const [info, setInfo] = useState({})


    useEffect(() => {
        const updateInfo = {}
        for (const key in form) {
            updateInfo[key] = form[key].data;
        }

        setInfo(updateInfo)
    }, [form]);


    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = { // функція, яка передається до callback
            ...info,
            // id: Date.now()
        }
        callback(newPost)

        let emptyInfo = {}
        Object.keys(info).map((key) => {
            // setInfo({...info, [key]:""})
            emptyInfo = {...emptyInfo, [key]: ''}
            }
        )
        setInfo(emptyInfo)



    }

    return (

        // <div className={st.Rectangle}>
        <div className={rootClasses.join(" ")}>

            {/*<div className={st.Alert}>read only</div>*/}

            <MyFormAlert frame_mode={frame_mode}/>

            <MySelect/>

            <form>
                {
                    Object.keys(form).map((key) =>

                            <div className={st.Row}>
                                <div>{form[key].name}</div>
                                <MyInput
                                    value={info[key]}
                                    // value={form[key].data}
                                    onChange={ (e) => setInfo({...info, [key]: e.target.value})}
                                    type={form[key].inputType}
                                    placeholder={form[key].name}
                                    inputStyle={InputStyleConst.INPUT}
                                    disabled={disabled}
                                    // disabled
                                />
                            </div>
                    )
                }

                    {/*<MyInput*/}
                    {/*    value={info.address}*/}
                    {/*    onChange={ (e) => setInfo({...info, address: e.target.value})}*/}
                    {/*    type="text"*/}
                    {/*    placeholder="Адреса"*/}
                    {/*    inputStyle="input"*/}

                    {/*/>*/}

                {frame_mode===Frame_Mode.READ &&
                    <MyButton >Згенерувати QR-code</MyButton>
                }

                {frame_mode===Frame_Mode.CREATE &&
                    <div style={{display:"flex", gap:"30px"}}>
                        <MyButton onClick={(e) => addNewPost(e)}>Створити</MyButton>
                        <MyButton >Скасувати</MyButton>
                    </div>
                }
                {frame_mode===Frame_Mode.CHANGE &&
                    <div style={{display:"flex", gap:"30px"}}>
                        <MyButton onClick={(e) => addNewPost(e)}>Зберегти зміни</MyButton>
                        <MyButton >Скасувати</MyButton>
                    </div>
                }

            </form>

        </div>



    );
};

export default MyCreateForm;