import React, {useState} from 'react';
import {Route, Routes, useSearchParams} from "react-router-dom";
import List_page_content from "../components/UI/Content/List_page_content";
import MyCreateForm from "../components/UI/Content/forms/MyCreateForm";
import {Frame_Mode} from "../constant/Const";
import MyEditForm from "../components/UI/Content/forms/editForm/MyEditForm";
import {useFetchingHook} from "../hooks/useFetchingHook";
import InfoBuildService from "../API/InfoBuildService";

const CreateTablePage = () => {
    const [tableParam, setTableParam] = useState({
        tableName: "Назва таблиці",
        accessRight: "",
        buttons: [null],
        searchInclude: [null],
        listFormParam: {
            v_1: "",
            v_2: "",
            v_3: "col_1",
            v_4: "id"
        },
    });

    const [infoBuilds, setInfoBuilds] = useState([{
        col_1: "Hello"
    }]);

    const selectedData = infoBuilds[0];
    const setSelectedData = (newData) => {
        setInfoBuilds(prev => prev.map(item =>
            item === selectedData ? {...item, ...newData} : item
        ));
    };

    const [searchParam, setSearchParam] = useSearchParams();

    const form_FieldName_2 = {
        col_1: {
            name: "Адреса",
            inputType: "text",
            data: ""
        },
        col_2: {
            name: "Електричний щиток",
            inputType: "text",
            data: ""
        },
        col_3: {
            name: "Місце перекриття",
            inputType: "text",
            data: ""
        },
        col_4: {
            name: "Кількість людей з обмеженою рухливістю",
            inputType: "number",
            data: ""
        },
        col_5: {
            name: "Приблизна кількість людей",
            inputType: "number",
            data: ""
        }
    };

    const [form_FieldName_3, setForm_FieldName_3] = useState({
        col_1: {
            name: "Адреса",
            inputType: "text",
            category: "",
            accessRight: false,
        }
    });

    const [selectedRow, setSelectedRow] = useState("col_1");

    const [createTable_serv] = useFetchingHook(async (data) => {
        const response = InfoBuildService.createTable(data);
        console.log(response); // Handle errors or response accordingly
    });

    const save_settings = () => {
        const payload = {...tableParam, columnsParam: form_FieldName_3};
        createTable_serv(payload);
        console.log(payload);
    };

    const render = () => (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", position: "relative"}}>
            <List_page_content
                tableParam={tableParam}
                informations={infoBuilds}
                setSearchParam={setSearchParam}
                isCreatingTable={true}
            >
                <MyCreateForm
                    frame_mode={Frame_Mode.CREATE_TABLE}
                    form={form_FieldName_3}
                    data={selectedData}
                    setData={setSelectedData}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </List_page_content>
            <MyEditForm
                tableParam={tableParam}
                setTableParam={setTableParam}
                form_FieldName_3={form_FieldName_3}
                setForm_FieldName_3={setForm_FieldName_3}
                selectedRow={selectedRow}
                setSelectedRow={setSelectedRow}
                save_settings={save_settings}
            />
        </div>
    );

    return render();
};

export default CreateTablePage;

const example = {
    "tableName": "Назва таблиці",
    "accessRight": "private",
    "buttons": [
        null
    ],
    "searchInclude": [
        null,
        "col_1",
        "col_2",
        "col_3"
    ],
    "listFormParam": {
        "v_1": "col_2",
        "v_2": "col_1",
        "v_3": "col_3",
        "v_4": "id"
    },
    "columnsParam": {
        "id": {
            "name": "№",
            "inputType": "number",
            "category": "general",
            "accessRight": false
        },
        "col_1": {
            "name": "Адреса",
            "inputType": "text",
            "category": "all",
            "accessRight": false
        },
        "col_2": {
            "fieldName": "",
            "inputType": "",
            "category": "general",
            "accessRights": "",
            "name": "Ім'я"
        },
        "col_3": {
            "fieldName": "",
            "inputType": "number",
            "category": "general",
            "accessRights": "",
            "name": "Телефон",
            "accessRight": "false"
        }
    }
}

const example_2 = [
    {
        "id": 1,
        "col_1": "Клепарівська 27",
        "col_2": "5",
        "col_3": "307",
        "col_4": "КН-42с",
        "col_5": "Петренко О.О."
    }
]