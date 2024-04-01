import React, {useState} from 'react';
import MyFormAlert from "../../alert/MyFormAlert";
import MySelect from "../../select/MySelect";
import st from "./MyCreateForm.module.css";
import MyInput from "../../input/MyInput";
import {Frame_Mode, InputStyleConst} from "../../../../constant/Const";
import MyButton from "../../button/MyButton";


class Template {
    constructor(fieldName = "", inputType = "", accessRights = "") {
        this.fieldName = fieldName;
        this.inputType = inputType;
        this.accessRights = accessRights;
    }
}



const MyCreateTableColumnForm = () => {

    const [formTable, setFormTable] = useState({
        tableName: "",
        accessRights: "",

    })

    const [formColumn, setFormColumn] = useState({
        value_0: {
            fieldName: "email",
            inputType: "text",
            accessRights: "private", /*Вибирається тільки тоді, коли таблиця protected*/
            group: "", /*All, General, add...*/
            priority: 10, /*Пріорітет відображення у списку*/
            includeOnSearch: "" /*Дані поля будуть враховуватись у пошуковій строці*/
            // data: null
        }
    })

    // const columnTemplate = {
    //     name: "",
    //     inputType: "",
    //     accessRights: ""
    // }
    //
    // const [formColumn, setFormColumn] = useState([
    //     {
    //         name: "email",
    //         inputType: "text",
    //         accessRights: "private"
    //     }
    //
    //     ]);


    const rootClasses = [st.Rectangle, st.Visible]

    // if (visible || visible == null){
    //     rootClasses.push(st.Visible)
    // }

    const handleChange = (key, fieldName, value) => {  // Цікаве рішення з проблемою ітерації обєктів під час заповнення поля...
        setFormColumn(prevForm => ({
            ...prevForm,
            [key]: {
                ...prevForm[key],
                [fieldName]: value
            }
        }));

        console.log(value)
    };

    const newValue = `value_${Object.keys(formColumn).length}` // Для автоматичної унікальної назви обєктів

    console.log(formColumn)


    function increaseWidth(x) {
        let numberOfCharacters = x.target.value.length + 3;
        console.log(numberOfCharacters)
        if(numberOfCharacters >= 4){
            let length = numberOfCharacters + "ch";
            console.log(x.target.style.width)
            x.target.style.width = length;
            console.log(x.target.style.width, "x.width")

        }else {x.target.style.width = "auto";}
    }





    return (
        <div className={rootClasses.join(" ")}>

            {/*<div className={st.Alert}>read only</div>*/}

            <MyFormAlert frame_mode={Frame_Mode.CREATE}/> {/*Думаю тимчасово*/}

            {/*<MySelect/>*/}

            <div style={{fontSize: "30px", fontWeight: "900"}}>
                <MyInput
                    value={formTable.tableName}
                    onChange={(e) => setFormTable({...formTable, tableName: e.target.value})}

                    inputStyle={InputStyleConst.FIELD_NAME}
                    placeholder="Введіть назву таблиці..."
                    type="text"

                    onInput={e => increaseWidth(e)}  /*Хочу щоб поле змінювало динамічно ширину*/
                />

                {/*<h2 */}
                {/*    contentEditable*/}
                {/*    onChange={(e) => setFormTable({...formTable, tableName: e.target.value})}*/}
                {/*>{formTable.tableName}</h2>*/}

                <MySelect
                    value={formTable.accessRights}
                    onChange={(e) => setFormTable({...formTable, accessRights: e})}


                    defaultValue="Виберіть права доступу..."


                    options={[
                        {value: "private", name: "private"},
                        {value: "public", name: "public"},
                        {value: "protected", name: "protected"},
                        // {value: -1, name: "показати все"},
                    ]}

                />
            </div>

            <MyButton>+</MyButton>

            <form>
                {
                    Object.keys(formColumn).map((key) =>

                        <div className={st.Row}>
                            {/*<div>{formColumn[key].name}</div>*/}

                            <MyInput
                                value={formColumn[key].fieldName}

                                onChange={(e) => handleChange(key, "fieldName", e.target.value)}

                                inputStyle={InputStyleConst.FIELD_NAME}
                                placeholder="Введіть назву поля..."

                                onInput={e => increaseWidth(e)}

                                // onChange={ (e) => setForm([...formColumn, {[formColumn[key].name]: e.target.value}])}
                                // TODO ДОРОБИТИ

                            />

                            <MyInput
                                // value={info[key]}
                                value={formColumn[key].inputType}
                                onChange={ (e) => handleChange(key, "inputType", e.target.value)}
                                // type={formColumn[key].inputType}
                                // placeholder={formColumn[key].name}
                                placeholder="Виберіть тип поля..."
                                inputStyle={InputStyleConst.INPUT}
                                // disabled={disabled}
                                // disabled
                            />

                            <MySelect
                                value={formColumn[key].accessRights}
                                onChange={e => handleChange(key, "accessRights", e)}

                                defaultValue="Права доступу"


                                options={[
                                    {value: "private", name: "private"},
                                    {value: "public", name: "public"},
                                    // {value: "protected", name: "protected"},
                                    // {value: -1, name: "показати все"},
                                ]}

                            />

                            <MySelect
                                value={formColumn[key].priority}
                                onChange={e => handleChange(key, "priority", e)}

                                defaultValue="Кількість елементів на сторінці"


                                options={[
                                    {value: 5, name: "5"},
                                    {value: 10, name: "10"},
                                    {value: 25, name: "25"},
                                    {value: -1, name: "показати все"},
                                ]}

                            />


                        </div>
                    )
                }


                <div onClick={() => setFormColumn(prevForm => ({
                    ...prevForm,
                    // value_2: new Template()
                    [newValue]: new Template()

                }) )}>
                    Додати колонку
                </div>


                {/*РОБОТА ПОЛІВ З МАСИВАМИ ОБЄКТІВ*/} {/*TODO*/}
                {/**/}
                {/**/}

                {/*{*/}
                {/*    formColumn.map(obg =>*/}
                {/*        <div className={st.Row}>*/}

                {/*            <MyInput*/}
                {/*                value={obg.name}*/}
                {/*                inputStyle={InputStyleConst.FIELD_NAME}*/}
                {/*                // onChange={e => setForm( {...formColumn, [obg.name]: e.target.value} )}*/}
                {/*                onChange={e => {*/}
                {/*                    const updateForm = formColumn.map(item =>*/}
                {/*                        item.name === obg.name*/}
                {/*                            ? {...item, name: e.target.value }*/}
                {/*                            : item*/}
                {/*                    );*/}
                {/*                    setForm(updateForm);*/}
                {/*                }}*/}
                {/*                placeholder="Введіть назву поля..."*/}
                {/*            />*/}

                {/*            <MyInput*/}
                {/*                value={obg.inputType}*/}
                {/*                inputStyle={InputStyleConst.INPUT}*/}
                {/*                // onChange={e => setForm( {...formColumn, [obg.name]: e.target.value} )}*/}
                {/*                onChange={e => {*/}
                {/*                    const updateForm = formColumn.map(item =>*/}
                {/*                        item.inputType === obg.inputType*/}
                {/*                            ? {...item, inputType: e.target.value }*/}
                {/*                            : item*/}
                {/*                    );*/}
                {/*                    setForm(updateForm);*/}
                {/*                }}*/}
                {/*                placeholder="Виберіть тип поля..."*/}

                {/*            />*/}

                {/*            <MySelect/>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*}*/}



                {/*/!*<div onClick={() => setForm([...formColumn, columnTemplate])}> Додати колонку</div>*!/*/}
                {/*<div onClick={() => setForm([...formColumn, new Template()])}>*/}
                {/*    Додати колонку*/}
                {/*</div>*/}


                {/**/}
                {/**/}
                {/*РОБОТА ПОЛІВ З МАСИВАМИ ОБЄКТІВ*/} {/*TODO*/}



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

