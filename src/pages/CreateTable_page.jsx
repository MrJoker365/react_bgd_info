import React, {useState} from 'react';
import {Route, Routes, useSearchParams} from "react-router-dom";
import List_page_content from "../components/UI/Content/List_page_content";
import MyCreateForm from "../components/UI/Content/forms/MyCreateForm";
import {Frame_Mode} from "../constant/Const";
import MyCreateTableColumnForm from "../components/UI/Content/forms/MyCreateTableColumnForm";

import st from "../components/UI/Content/List_page_content.module.css"
import MyEditForm from "../components/UI/Content/forms/editForm/MyEditForm";

const CreateTablePage = () => {

    let getInfos = () => {

        let info = [];

        for (let i = 1; i < 20; i++) {


            const some = {
                id: i,
                address: `м.Львів вул.Івана Франка ${100+i} `,
                electric_box: "4 поверх",
                place_of_overlap: "1 поверх",
                persons_with_disabilities: 2,
                number_of_people: 45
            }
            info.push(some);

        }

        return info;
    }

    const [infoBuilds, setInfoBuilds] = useState(getInfos());

    const[searchParam, setSearchParam] = useSearchParams(); /*Покищо не знаю чи потрібно*/



    const form_FieldName_2 = {
        id: {
            name: "№",
            inputType: "number",
            data: "",
        },
        address: {
            name: "Адреса",
            inputType: "text",
            data: ""
        },
        electric_box:  {
            name: "Електричний щиток",
            inputType: "text",
            data: ""
        },
        place_of_overlap:  {
            name: "Місце перекриття",
            inputType: "text",
            data: ""
        },
        persons_with_disabilities:  {
            name: "Кількість людей з обмеженою рухливістю",
            inputType: "number",
            data: ""
        },
        number_of_people:  {
            name: "Приблизна кількість людей",
            inputType: "number",
            data: ""
        }
    }


    const render = () =>
        <div style={{display: "flex", flexDirection: "column",justifyContent:"space-between", width: "100%", position: "relative"}}>


            <List_page_content informations={infoBuilds} setSearchParam={setSearchParam}>
                <MyCreateForm frame_mode={Frame_Mode.READ} form={form_FieldName_2} />
            </List_page_content>

            {/*<div className={st.Frame2}> hello </div>*/}

            <MyEditForm/>

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