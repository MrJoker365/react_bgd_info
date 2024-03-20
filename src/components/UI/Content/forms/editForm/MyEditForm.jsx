import React, {useState} from 'react';
import st from "./MyEditForm.module.css"
import MyInput from "../../../input/MyInput";
import {InputStyleConst} from "../../../../../constant/Const";
import MySelect from "../../../select/MySelect";

const MyEditForm = ({tableParam, setTableParam}) => {

    const tableFieldNames = {
        tableName: "Назва таблиці",
        accessRight: "Права доступу",
        buttons: "Додаткові кнопки"
    }


    // const [tableParam, setTableParam] = useState({

    //     tableName: "",
    //     accessRight: "",
    //     buttons: ""
    // })


    const columnFieldNames = {
        nameOfField: "Назва поля",
        typeOfField: "Тип поля вводу",
        category: "Категорія",
        accessRight: "Права доступу",
        includeInSearch: "Поля видимі для пошуку",
        priority: "Пріорітет відображень у списку"
    }

    const [columnsParam, setColumnsParam] = useState({
        nameOfField: "",
        typeOfField: "",
        category: "",
        accessRight: false,  /*коли true, то доступ до даних мають ВСІ...*/
        includeInSearch: false, /*коли true, то поле буде видимим для поля Search*/
        priority: 0 /*1, 2, 3, 4*/
    })




    // const [tableFieldNames, setParamTable] = useState({
    //     tableName: {
    //         fieldName: "Назва таблиці",
    //         data: ""
    //     },
    //     accessRight: {
    //         fieldName: "Права доступу",
    //         data: ""
    //     }
    // })
    // const [paramColumn, setParamColumn] = useState({})



    const [table_form_visible, setTable_form_visible] = useState(true)



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

                <div>
                    Columns:
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
                        <div>{columnFieldNames.nameOfField}</div>

                        <MyInput
                            value={columnsParam.nameOfField}
                            onChange={ e => setColumnsParam({...columnsParam, nameOfField: e.target.value} )}
                            inputStyle={InputStyleConst.FIELD_NAME}
                        />
                    </div>


                    <div className={st.Row}>
                        <div>{columnFieldNames.typeOfField}</div>

                        <MySelect
                            value={columnsParam.typeOfField}
                            onChange={(e) => setColumnsParam({...columnsParam, typeOfField: e})}


                            defaultValue="Виберіть тип поля"


                            options={[
                                {value: "string", name: "строка"},
                                {value: "int", name: "число"},
                                {value: "password", name: "пароль"},
                                {value: "email", name: "емеіл"},
                                {value: "url", name: "URL"},
                                {value: "json", name: "JSON"},

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