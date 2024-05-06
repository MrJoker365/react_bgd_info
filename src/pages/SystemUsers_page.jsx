import React, {useEffect, useState} from 'react';
import "../styles/App.css"
import Navbar from "../components/UI/Navbar/Navbar";
import List_page_content from "../components/UI/Content/List_page_content";
import {useFetchingHook} from "../hooks/useFetchingHook";
import InfoBuildService from "../API/InfoBuildService";
import {Outlet, Route, Routes, useLocation, useParams, useSearchParams} from "react-router-dom";
import MyCreateForm from "../components/UI/Content/forms/MyCreateForm";
// import Frame_Mode from "../constant/Const";

import {Frame_Mode, InputStyleConst} from "../constant/Const";


const MainPage = () => {


    const location = useLocation();

    // const searchParam = new URLSearchParams(location.search);
    const[searchParam, setSearchParam] = useSearchParams();
    const tableQuery = searchParam.get("table")?.replaceAll("_", " ") || null;
    const idQuery = parseInt(searchParam.get("id"), 10) || null;











    const [tableParam, setTableParam] = useState({ /*TODO тимчасво*/
        tableName: "Користувачі системи",
        accessRight: "private",
        buttons: "",
        searchInclude: [""],
        listFormParam: {
            v_1: "name",
            v_2: "",
            v_3: "email",
            v_4: "role"
        }
    })


    const [form_FieldName_3, setForm_FieldName_3] = useState({
        id: {
            name: "№",
            inputType: "number",
            category: "",
            accessRight: false,
        },
        email: {
            name: "Електронна пошта",
            inputType: "text",
            category: "",
            accessRight: false,
        },
        name: {
            name: "Ім'я",
            inputType: "text",
            category: "",
            accessRight: false,
        },
        password: {
            name: "Пароль",
            inputType: "text",
            category: "",
            accessRight: false,
        },
        role: {
            name: "Роль",
            inputType: "text",
            category: "",
            accessRight: false,
        },
        // col_5: {
        //     name: "Приблизна кількість людей",
        //     inputType: "number",
        //     category: "",
        //     accessRight: false,
        // }
    })







    const [allUsers, setAllUsers] = useState([]);



    const [fetching_allUsers, isLoading, error] = useFetchingHook(async (limit, page) => {

        const {data: response} = await InfoBuildService.getAllUsers();


        // console.log("response_1 ")
        // console.log(response_1)
        //
        // console.log("response_2 ")
        // console.log(response_2)
        //
        // console.log("ПЕРЕВІРКА НА НАЯВНІСТЬ ID ")
        // console.log(response_2[0].id)




        const response_data = response.map(obg => {
            return  ({
                id: obg.id,
                email: obg.email,
                name: obg.name,
                password: obg.password,
                role: obg.role
            })
        })

        console.log(response_data)
        setAllUsers(response_data)
    })


    useEffect(() => {
        fetching_allUsers();
        console.log("Виконалась загрузка даних")
    }, [location]); /*TODO ще треба придумати...*/









    // const [infoBuild, setInfoBuild] = useState(getInfos()[5]);
    const [selectedUser, setSelectedUser] = useState(null);






    const [fetching_selectedUser, isLoading_selectedUser, error_selectedUser] = useFetchingHook(async (/*tableName,*/ u_id) => {
        // const respons = await InfoBuildService.getById(id)
        // setInfoBuild(respons.data)

        // const {data: response} = await InfoBuildService.getTableColumn(tableName, id)
        const {data: response} = await InfoBuildService.getUser(u_id)
        console.log("ОТРИМАННЯ ІНФОРМАЦІЇ selectedUser")
        console.log(response)
        // setInfoBuild(response.json)
        setSelectedUser({
            id: response.id,
            email: response.email,
            name: response.name,
            password: response.password,
            role: response.role
        })
    })

    const [visible, setVisible] = useState(false)
    let vs = false
    // if(id) vs = true
    if(idQuery) vs = true


    useEffect(() => {

        // if (location.pathname.includes('/main/buildInfo') && id !== "0") {
        if (idQuery) {
            // fetching_InfoBuild(tableQuery, idQuery);
            fetching_selectedUser(idQuery);
            // setInfoBuild(getInfos()[idQuery - 1]) /*ТИМЧАСОВО*/
        }else {
            setSelectedUser(null) /*ТИМЧАСОВО*/
        }

        // }, [id, location.pathname, vs]); /*ТЕЖ ТИМЧАСОВО*/
    }, [idQuery, location.pathname, vs]); /*ТЕЖ ТИМЧАСОВО*/

    useEffect(() => {
        if(selectedUser) {
            setVisible(true)
            console.log(selectedUser)

        }
        else {
            setVisible(false)
            console.log("Такої інфи не існує")
        }
    }, [selectedUser]);



    // Добавлення інформації

    // const [addInfo] = useFetchingHook(async (data) => {
    //     const response = InfoBuildService.add(data)
    //     console.log(response) // потім треба буде обробляти на наявність такох інфи або іншу некоректність
    // })



    const [fetching_addInfo, isLoading__addInfo, error_addInfo] = useFetchingHook(async (tableName, data) => {
        const response = InfoBuildService.createTableColumn(tableName, data)
        console.log(response) // потім треба буде обробляти на наявність такох інфи або іншу некоректність
    })

    const [fetching_updateInfo, isLoading_updateInfo, error_updateInfo] = useFetchingHook(async (id, data) => {
        const response = InfoBuildService.updateTableColumn(id, data)
        console.log(response) // потім треба буде обробляти на наявність такох інфи або іншу некоректність
    })

    // const addInfo = (newData) => {
    //     addInfo(newData)
    // }

    const addInfo = () => {
        // fetching_addInfo(tableQuery, {json: selectedUser})
        console.log({json: selectedUser});
    }

    const clearInfo = () => {
        setSelectedUser(null)
    }

    const updateInfo = () => {
        //TODO функціонал для редагування / видалення інфи

        // fetching_updateInfo(idQuery, {json: selectedUser})
        console.log({json: selectedUser});


    }



    return (

        // renderContent()

        <Routes>
            <Route element={<List_page_content tableParam={tableParam} informations={allUsers} setSearchParam={setSearchParam}/>}>

                <Route path="read" element={ <MyCreateForm frame_mode={Frame_Mode.READ} form={form_FieldName_3}
                                                           data={selectedUser} visible={visible} />}/>

                <Route path="change" element={ <MyCreateForm frame_mode={Frame_Mode.CHANGE} callback={updateInfo}
                                                             form={form_FieldName_3} data={selectedUser} setData={setSelectedUser}
                                                             visible={visible} method={{updateInfo}} />}/>
            </Route>

            <Route path="create" element={<MyCreateForm frame_mode={Frame_Mode.CREATE} data={selectedUser} setData={setSelectedUser}
                                                        callback={addInfo} form={form_FieldName_3} method={{addInfo, clearInfo}}/>}/>

        </Routes>
    );
};

export default MainPage;