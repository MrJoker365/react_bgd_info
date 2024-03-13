import React, {useState} from 'react';
import st from "./MyEditForm.module.css"
import MyInput from "../../../input/MyInput";
import {InputStyleConst} from "../../../../../constant/Const";
import MySelect from "../../../select/MySelect";

const MyEditForm = () => {

    const paramTable = {
        tableName: "Назва таблиці",
        accessRight: "Права доступу",
        buttons: "Додаткові кнопки"
    }


    const [dataTable, setDataTable] = useState({
        tableName: "",
        accessRight: "",
        buttons: ""
    })


    const paramColumns = {
        nameOfField: "Назва поля",
        typeOfField: "Тип поля вводу",
        category: "Категорія",
        accessRight: "Права доступу",
        includeInSearch: "Поля видимі для пошуку",
        priority: "Пріорітет відображень у списку"
    }

    const [dataColumns, setDataColumns] = useState({
        nameOfField: "",
        typeOfField: "",
        category: "",
        accessRight: false,  /*коли true, то доступ до даних мають ВСІ...*/
        includeInSearch: false, /*коли true, то поле буде видимим для поля Search*/
        priority: 0 /*1, 2, 3, 4*/
    })




    // const [paramTable, setParamTable] = useState({
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



    return (
        <div className={st.Rectangle}>
            <div className={st.Frame_1}>

                <div>
                    Table
                </div>

                <div>
                    Column_1
                </div>



                {/*Hello*/}
            </div>

            <div className={st.Frame_2}>
                <form style={{gap: "15px"}}>

                    <div className={st.Row}>
                        <div>{paramTable.tableName}</div>

                        <MyInput
                            value={dataTable.tableName}
                            onChange={ e => setDataTable({...dataTable, tableName: e.target.value} )}
                            inputStyle={InputStyleConst.FIELD_NAME}
                        />
                    </div>


                    <div className={st.Row}>
                        <div>{paramTable.accessRight}</div>

                        <MySelect
                            value={dataTable.accessRight}
                            onChange={(e) => setDataTable({...dataTable, accessRight: e})}


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
                        <div>{paramTable.buttons}</div>  {/*TODO зробити як у відео React select*/}

                        <MySelect
                            value={dataTable.accessRight}
                            onChange={(e) => setDataTable({...dataTable, accessRight: e})}


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
                    {/*    Object.keys(paramTable).map((key) =>*/}

                    {/*        <div className={st.Row}>*/}
                    {/*            <div>{paramTable[key]}</div>*/}

                    {/*            <MyInput*/}

                    {/*                value={dataTable[key]}*/}
                    {/*                onChange={ e => setDataTable({...dataTable, [key]: e.target.value} )}*/}

                    {/*                inputStyle={InputStyleConst.FIELD_NAME}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}
                </form>




                <form style={{gap: "15px"}}>

                    <div className={st.Row}>
                        <div>{paramColumns.nameOfField}</div>

                        <MyInput
                            value={dataColumns.nameOfField}
                            onChange={ e => setDataColumns({...dataColumns, nameOfField: e.target.value} )}
                            inputStyle={InputStyleConst.FIELD_NAME}
                        />
                    </div>


                    <div className={st.Row}>
                        <div>{paramColumns.typeOfField}</div>

                        <MySelect
                            value={dataColumns.typeOfField}
                            onChange={(e) => setDataColumns({...dataColumns, typeOfField: e})}


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