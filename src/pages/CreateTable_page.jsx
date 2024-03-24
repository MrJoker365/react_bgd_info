import React, {useState} from 'react';
import {Route, Routes, useSearchParams} from "react-router-dom";
import List_page_content from "../components/UI/Content/List_page_content";
import MyCreateForm from "../components/UI/Content/forms/MyCreateForm";
import {Frame_Mode} from "../constant/Const";
import MyCreateTableColumnForm from "../components/UI/Content/forms/MyCreateTableColumnForm";

import st from "../components/UI/Content/List_page_content.module.css"
import MyEditForm from "../components/UI/Content/forms/editForm/MyEditForm";

const CreateTablePage = () => {

    const [tableParam, setTableParam] = useState({
        tableName: "Львівський універ",
        accessRight: "",
        buttons: "",
        searchInclude: [],
        listFormParam: {
            v_1: "address",
            v_2: "electric_box",
            v_3: "col_1",
            v_4: "id"
        },
        listFormParam_2: {
            v_1: "address",
            v_2: "electric_box",
            v_3: "place_of_overlap",
            v_4: "id"
        }
    })

    // let getInfos = () => {
    //
    //     let info = [];
    //
    //     for (let i = 1; i < 30; i++) {
    //
    //
    //         const some = {
    //             id: i,
    //             address: `м.Львів вул.Івана Франка ${100+i} `,
    //             electric_box: "4 поверх",
    //             place_of_overlap: "1 поверх",
    //             persons_with_disabilities: 2,
    //             number_of_people: 45
    //         }
    //         info.push(some);
    //
    //     }
    //
    //     return info;
    // }

    const [infoBuilds, setInfoBuilds] = useState([{
        id: 1,
        col_1: "Hello"
    }]);

    const[searchParam, setSearchParam] = useSearchParams(); /*Покищо не знаю чи потрібно*/



    // const form_FieldName_2 = {
    //     id: {
    //         name: "№",
    //         inputType: "number",
    //         data: "",
    //     },
    //     address: {
    //         name: "Адреса",
    //         inputType: "text",
    //         data: ""
    //     },
    //     electric_box:  {
    //         name: "Електричний щиток",
    //         inputType: "text",
    //         data: ""
    //     },
    //     place_of_overlap:  {
    //         name: "Місце перекриття",
    //         inputType: "text",
    //         data: ""
    //     },
    //     persons_with_disabilities:  {
    //         name: "Кількість людей з обмеженою рухливістю",
    //         inputType: "number",
    //         data: ""
    //     },
    //     number_of_people:  {
    //         name: "Приблизна кількість людей",
    //         inputType: "number",
    //         data: ""
    //     }
    // }


    const form_FieldName_2 = {
        id: {
            name: "№",
            inputType: "number",
            data: "",
        },
        col_1: {
            name: "Адреса",
            inputType: "text",
            data: ""
        },
        col_2:  {
            name: "Електричний щиток",
            inputType: "text",
            data: ""
        },
        col_3:  {
            name: "Місце перекриття",
            inputType: "text",
            data: ""
        },
        col_4:  {
            name: "Кількість людей з обмеженою рухливістю",
            inputType: "number",
            data: ""
        },
        col_5:  {
            name: "Приблизна кількість людей",
            inputType: "number",
            data: ""
        }
    }





    const [form_FieldName_3, setForm_FieldName_3] = useState({
        id: {
            name: "№",
            inputType: "number",
            category: "",
            accessRight: false,  /*коли true, то доступ до даних мають ВСІ...*/
            // includeInSearch: false, /*коли true, то поле буде видимим для поля Search*/
            // priority: "", /*1, 2, 3, 4*/
            data: ""
        },
        col_1: {
            name: "Адреса",
            inputType: "text",
            category: "",
            accessRight: false,  /*коли true, то доступ до даних мають ВСІ...*/
            // includeInSearch: false, /*коли true, то поле буде видимим для поля Search*/
            // priority: "", /*1, 2, 3, 4*/
            data: ""
        }
    })

    const getPriority = (p) => {
        Object.keys(form_FieldName_3).map( (key) => {
            // form_FieldName_3[key].priority === p ? return `${key}`

            if (form_FieldName_3[key].priority === p) return `${key}`

        } )
    }


    const [selectedRow, setSelectedRow] = useState("id");


    const render = () =>
        <div style={{display: "flex", flexDirection: "column",justifyContent:"space-between", width: "100%", position: "relative"}}>


            <List_page_content tableParam={tableParam} informations={infoBuilds} setSearchParam={setSearchParam} isCreatingTable={true}>
                <MyCreateForm frame_mode={Frame_Mode.CREATE_TABLE} form={form_FieldName_3}
                              selectedRow={selectedRow} setSelectedRow={setSelectedRow}/>
            </List_page_content>

            {/*<div className={st.Frame2}> hello </div>*/}

            <MyEditForm tableParam={tableParam} setTableParam={setTableParam}
                        form_FieldName_3={form_FieldName_3} setForm_FieldName_3={setForm_FieldName_3}
                        selectedRow={selectedRow} setSelectedRow={setSelectedRow}
            />

        </div>






    return (
        // <Routes>
        //     <Route element={<List_page_content informations={infoBuilds} setSearchParam={setSearchParam}/>}>
        //         <Route index element={ <MyCreateTableColumnForm/>}/>
        //     </Route>
        // </Routes>

        render()
    );
};

export default CreateTablePage;