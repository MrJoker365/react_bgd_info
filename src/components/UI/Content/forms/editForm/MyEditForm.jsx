import React, {useState} from 'react';
import st from "./MyEditForm.module.css"
import MyInput from "../../../input/MyInput";
import {InputStyleConst} from "../../../../../constant/Const";
import MySelect from "../../../select/MySelect";



class Template {
    constructor(name = "", inputType = "",category = "", accessRights = "") {
        this.name = name;
        this.inputType = inputType;
        this.category = category;
        this.accessRights = accessRights;
    }
}


const MyEditForm = ({tableParam, setTableParam, form_FieldName_3, setForm_FieldName_3,selectedRow, setSelectedRow, save_settings}) => {

    const tableFieldNames = {
        tableName: "Назва таблиці",
        accessRight: "Права доступу",
        buttons: "Додаткові кнопки",
        listFormParam: "Пріорітет відображень у списку"
    }


    console.log(Object.keys(tableParam.listFormParam).find(key =>tableParam.listFormParam[key] === `${selectedRow}` ))

    // const [tableParam, setTableParam] = useState({

    //     tableName: "",
    //     accessRight: "",
    //     buttons: ""
    // })


    const columnFieldNames = {
        name: "Назва поля",
        inputType: "Тип поля вводу",
        category: "Категорія",
        accessRight: "Права доступу",
        includeInSearch: "Видимий для пошуку",
        priority: "Пріорітет відображень у списку"
    }

    // const [columnsParam, setColumnsParam] = useState({
    //     name: "",
    //     inputType: "",
    //     category: "",
    //     accessRight: false,  /*коли true, то доступ до даних мають ВСІ...*/
    //     includeInSearch: false, /*коли true, то поле буде видимим для поля Search*/
    //     priority: 0 /*1, 2, 3, 4*/
    // })


    const columnsParam = form_FieldName_3[selectedRow]

    const setColumnsParam = (fieldName, value) => {
        setForm_FieldName_3((prevForm) => ({
            ...prevForm,
            [selectedRow]: {
                ...prevForm[selectedRow],
                [fieldName]:value
        }
    }))}

    const getListFormParam = () => {
        const res = Object.keys(tableParam.listFormParam).find(key =>tableParam.listFormParam[key] === `${selectedRow}` )

        return res ? res : "null"
    }


    // const [tableFieldNames, setParamTable] = useState({
    //     tableName: {
    //         name: "Назва таблиці",
    //         data: ""
    //     },
    //     accessRight: {
    //         name: "Права доступу",
    //         data: ""
    //     }
    // })
    // const [paramColumn, setParamColumn] = useState({})



    const [table_form_visible, setTable_form_visible] = useState(true)


    const newValue = () => `col_${Object.keys(form_FieldName_3).length}`


    return (
        <div className={st.Rectangle}>
            <div className={st.Frame_1}>

                <div
                //     onClick={ () =>
                //         table_form_style.display
                //         ? delete table_form_style.display
                //         : table_form_style.display === "none"
                // }

                        onClick={ () =>
                            table_form_visible
                            ? setTable_form_visible(false)
                            : setTable_form_visible(true)
                    }


                >
                    Table
                </div>

                <div style={{display: "flex", gap: "10px"}}>
                    Columns:

                    <div style={{display: "flex"}}>
                        {Object.keys(form_FieldName_3).map(key =>

                            <div style={{color: "purple", padding: "0 5px"}}
                                 onClick={() =>
                                     setSelectedRow(key)
                            }
                            >{key}</div>
                        )}
                    </div>

                    <div style={{color: "green"}}
                         onClick={() => setForm_FieldName_3((prevForm) => ({
                             ...prevForm,
                             [newValue()]: new Template()
                         }))}
                    >+ new column</div>
                </div>


                <div style={{background: "white", color: "black"}}
                     onClick={() => {save_settings()}}

                >
                    Save settings
                </div>



                {/*Hello*/}
            </div>

            <div className={st.Frame_2}>



                <form className={st.TableForm} aria-current={table_form_visible === false}>

                    <div className={st.Row}>
                        <div>{tableFieldNames.tableName}</div>

                        <MyInput
                            value={tableParam.tableName}
                            onChange={ e => setTableParam({...tableParam, tableName: e.target.value} )}
                            inputStyle={InputStyleConst.FIELD_NAME}
                        />
                    </div>


                    <div className={st.Row}>
                        <div>{tableFieldNames.accessRight}</div>

                        <MySelect
                            value={tableParam.accessRight}
                            onChange={(e) => setTableParam({...tableParam, accessRight: e})}


                            defaultValue="Виберіть права доступу..."


                            options={[
                                {value: "private", name: "private"},
                                {value: "public", name: "public"},
                                {value: "protected", name: "protected"},
                                // {value: -1, name: "показати все"},
                            ]}

                        />

                    </div>

                    <div className={st.Row}>
                        <div>{tableFieldNames.buttons}</div>  {/*TODO зробити як у відео React select*/}

                        <MySelect
                            value={tableParam.accessRight}
                            onChange={(e) => setTableParam({...tableParam, accessRight: e})}


                            defaultValue="Виберіть права доступу..."


                            options={[
                                {value: "private", name: "private"},
                                {value: "public", name: "public"},
                                {value: "protected", name: "protected"},
                                // {value: -1, name: "показати все"},
                            ]}

                        />

                    </div>






                    {/*{*/}
                    {/*    Object.keys(tableFieldNames).map((key) =>*/}

                    {/*        <div className={st.Row}>*/}
                    {/*            <div>{tableFieldNames[key]}</div>*/}

                    {/*            <MyInput*/}

                    {/*                value={tableParam[key]}*/}
                    {/*                onChange={ e => setDataTable({...tableParam, [key]: e.target.value} )}*/}

                    {/*                inputStyle={InputStyleConst.FIELD_NAME}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}
                </form>




                <form style={{gap: "15px"}}>

                    <div className={st.Row}>
                        <div>{columnFieldNames.name}</div>

                        <MyInput
                            value={columnsParam.name}
                            onChange={ e => setColumnsParam("name", e.target.value)}
                            inputStyle={InputStyleConst.FIELD_NAME}
                        />
                    </div>


                    <div className={st.Row}>
                        <div>{columnFieldNames.inputType}</div>

                        <MySelect
                            value={columnsParam.inputType}
                            // onChange={(e) => setColumnsParam({...columnsParam, inputType: e})}
                            onChange={(e) => setColumnsParam("inputType", e)} /*TODO Продовжувати звідси...*/


                            defaultValue="Виберіть тип поля..."


                            options={[
                                {value: "string", name: "строка"},
                                {value: "number", name: "число"},
                                {value: "password", name: "пароль"},
                                {value: "email", name: "емеіл"},
                                {value: "url", name: "URL"},
                                {value: "json", name: "JSON"},

                                // {value: -1, name: "показати все"},
                            ]}

                        />

                    </div>



                    <div className={st.Row}>
                        <div>{columnFieldNames.category}</div>

                        <MySelect
                            value={columnsParam.category}
                            // onChange={(e) => setColumnsParam({...columnsParam, inputType: e})}
                            onChange={(e) => setColumnsParam("category", e)} /*TODO Продовжувати звідси...*/


                            defaultValue="Категорія..."


                            options={[
                                {value: "general", name: "Загальні"},
                                {value: "all", name: "Всі"},

                                // {value: -1, name: "показати все"},
                            ]}

                        />

                    </div>




                    <div className={st.Row}>
                        <div>{columnFieldNames.accessRight}</div>

                        <MySelect
                            value={columnsParam.accessRight}
                            // onChange={(e) => setColumnsParam({...columnsParam, inputType: e})}
                            onChange={(e) => setColumnsParam("accessRight", e)} /*TODO Продовжувати звідси...*/


                            defaultValue="Права доступу..."


                            options={[
                                {value: true, name: "Public"},
                                {value: false, name: "Private"},

                                // {value: -1, name: "показати все"},
                            ]}

                        />

                    </div>







                    {/*<div className={st.Row}>*/}
                    {/*    <div>{columnFieldNames.includeInSearch}</div>*/}
                    {/*    /!*<div>{columnsParam.includeInSearch}</div>*!/*/}


                    {/*    <MyInput*/}
                    {/*        // value={columnsParam.includeInSearch}*/}
                    {/*        checked={columnsParam.includeInSearch}*/}
                    {/*        onChange={ e => setColumnsParam("includeInSearch", e.target.checked)}*/}
                    {/*        // inputStyle={InputStyleConst.FIELD_NAME}*/}

                    {/*        type="checkbox"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <div className={st.Row}>
                        <div>{columnFieldNames.includeInSearch}</div>
                        {/*<div>{columnsParam.includeInSearch}</div>*/}


                        <MyInput
                            // value={columnsParam.includeInSearch}
                            checked={tableParam.searchInclude.some(obg => obg === `${selectedRow}`)}
                            onChange={ e => setTableParam((prevForm) => ({...prevForm, searchInclude: tableParam.searchInclude.includes(`${selectedRow}`)
                                    ? tableParam.searchInclude.filter(item => item !== `${selectedRow}`)
                                    : [...tableParam.searchInclude, `${selectedRow}`]
                            }))}
                            // inputStyle={InputStyleConst.FIELD_NAME}

                            type="checkbox"
                        />
                    </div>



                    {/*<div className={st.Row}>*/}
                    {/*    <div>{columnFieldNames.priority}</div>*/}

                    {/*    <MySelect*/}
                    {/*        value={columnsParam.priority}*/}
                    {/*        // onChange={(e) => setColumnsParam({...columnsParam, inputType: e})}*/}
                    {/*        onChange={(e) => setColumnsParam("priority", e)} */}


                    {/*        defaultValue="Пріорітет відображень у списку..."*/}


                    {/*        options={[*/}
                    {/*            {value: "v_1", name: "1"},*/}
                    {/*            {value: "v_2", name: "2"},*/}
                    {/*            {value: "v_3", name: "3"},*/}
                    {/*            {value: "v_4", name: "4"},*/}

                    {/*            // {value: -1, name: "показати все"},*/}
                    {/*        ]}*/}

                    {/*    />*/}

                    {/*</div>*/}




                    <div className={st.Row}>
                        <div>{tableFieldNames.listFormParam}</div>

                        <MySelect
                            // value={tableParam.listFormParam}
                            // value={Object.keys(tableParam.listFormParam).find(key =>tableParam.listFormParam[key] === `${selectedRow}` )}
                            value={getListFormParam()}
                            // onChange={(e) => setTableParam({...tableParam, listFormParam: {...tableParam[listFormParam], [e]: `${selectedRow}`}})}
                            onChange={(e) => e === "null"
                                ? setTableParam((prevForm) => ({...prevForm, listFormParam: {...prevForm.listFormParam, [getListFormParam()]: "" } }))
                                : setTableParam((prevForm) => ({...prevForm, listFormParam: {...prevForm.listFormParam, [e]: `${selectedRow}` } }))
                            }


                            defaultValue="Виберіть права доступу..."


                                    options={[
                                        {value: "v_1", name: "1"},
                                        {value: "v_2", name: "2"},
                                        {value: "v_3", name: "3"},
                                        {value: "v_4", name: "4"},
                                        {value: "null", name: "Не відображати"},

                                        // {value: -1, name: "показати все"},
                                    ]}

                        />

                    </div>





                </form>


            </div>
        </div>
    );
};

export default MyEditForm;