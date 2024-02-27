import React, {useState} from 'react';
import MyFormAlert from "../../alert/MyFormAlert";
import MySelect from "../../select/MySelect";
import st from "./MyCreateForm.module.css";
import MyInput from "../../input/MyInput";
import {Frame_Mode, InputStyleConst} from "../../../../constant/Const";
import MyButton from "../../button/MyButton";


const MyCreateTableColumnForm = () => {

    const columnTemplate = {
        fieldName: "",
        inputType: "",
        accessRights: ""
    }

    const [form, setForm] = useState([
        {
            fieldName: "email",
            inputType: "text",
            accessRights: "private"
        }

        ]);


    const rootClasses = [st.Rectangle, st.Visible]

    // if (visible || visible == null){
    //     rootClasses.push(st.Visible)
    // }


    return (
        <div className={rootClasses.join(" ")}>

            {/*<div className={st.Alert}>read only</div>*/}

            <MyFormAlert frame_mode={Frame_Mode.CREATE}/> {/*Думаю тимчасово*/}

            <MySelect/>

            <form>
                {
                    Object.keys(form).map((key) =>

                        <div className={st.Row}>
                            {/*<div>{form[key].name}</div>*/}
                            <MyInput
                                value={form[key].fieldName}
                                // onChange={ (e) => {
                                //     setForm({...form, [key]: e.target.value});
                                // }}

                                // onChange={ (e) => setForm([...form, {[form[key].fieldName]: e.target.value}])}
                                // TODO ДОРОБИТИ

                            />
                            {/*<MyInput*/}
                            {/*    value={info[key]}*/}
                            {/*    // value={form[key].data}*/}
                            {/*    onChange={ (e) => setInfo({...info, [key]: e.target.value})}*/}
                            {/*    type={form[key].inputType}*/}
                            {/*    placeholder={form[key].name}*/}
                            {/*    inputStyle={InputStyleConst.INPUT}*/}
                            {/*    disabled={disabled}*/}
                            {/*    // disabled*/}
                            {/*/>*/}
                        </div>
                    )
                }


                <div> Додати колонку</div>

                {/*{frame_mode===Frame_Mode.READ &&*/}
                {/*    <MyButton >Згенерувати QR-code</MyButton>*/}
                {/*}*/}

                {/*{frame_mode===Frame_Mode.CREATE &&*/}
                {/*    <div style={{display:"flex", gap:"30px"}}>*/}
                {/*        <MyButton onClick={(e) => addNewPost(e)}>Створити</MyButton>*/}
                {/*        <MyButton >Скасувати</MyButton>*/}
                {/*    </div>*/}
                {/*}*/}
                {/*{frame_mode===Frame_Mode.CHANGE &&*/}
                {/*    <div style={{display:"flex", gap:"30px"}}>*/}
                {/*        <MyButton onClick={(e) => addNewPost(e)}>Зберегти зміни</MyButton>*/}
                {/*        <MyButton >Скасувати</MyButton>*/}
                {/*    </div>*/}
                {/*}*/}

            </form>

        </div>

    );
};

export default MyCreateTableColumnForm;