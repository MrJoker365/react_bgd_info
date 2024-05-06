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

    // const {id} = useParams();
    // console.log(id)
    const location = useLocation();

    // const searchParam = new URLSearchParams(location.search);
    const[searchParam, setSearchParam] = useSearchParams();
    const tableQuery = searchParam.get("table")?.replaceAll("_", " ") || null;
    const idQuery = parseInt(searchParam.get("id"), 10) || null;













    const [tableParam, setTableParam] = useState({ /*TODO тимчасво*/
        // tableName: "Львівський універ",
        // accessRight: "private",
        // buttons: "",
        // searchInclude: [""],
        // listFormParam: {
        //     v_1: "col_1",
        //     v_2: "col_2",
        //     v_3: "col_3",
        //     v_4: "id"
        // }
    })


    const [form_FieldName_3, setForm_FieldName_3] = useState({
        // id: {
        //     name: "№",
        //     inputType: "number",
        //     category: "",
        //     accessRight: false,
        // },
        // col_1: {
        //     name: "Адреса",
        //     inputType: "text",
        //     category: "",
        //     accessRight: false,
        // },
        // col_2: {
        //     name: "Електричний щиток",
        //     inputType: "text",
        //     category: "",
        //     accessRight: false,
        // },
        // col_3: {
        //     name: "Місце перекриття",
        //     inputType: "text",
        //     category: "",
        //     accessRight: false,
        // },
        // col_4: {
        //     name: "Кількість людей з обмеженою рухливістю",
        //     inputType: "number",
        //     category: "",
        //     accessRight: false,
        // },
        // col_5: {
        //     name: "Приблизна кількість людей",
        //     inputType: "number",
        //     category: "",
        //     accessRight: false,
        // }
    })





    // Весь список
    let getInfos = () => {

        let info = [];

        for (let i = 1; i < 20; i++) {


            const some = {
                id: i,
                col_1: `м.Львів вул.Івана Франка ${100+i} `,
                col_2: "4 поверх",
                col_3: "1 поверх",
                col_4: 2,
                col_5: 45
            }
            // const my_header = {
            //     id: i,
            //     address: `м.Львів вул.Івана Франка ${100+i} `,
            //     electric_box: "4 поверх",
            //     place_of_overlap: "1 поверх",
            //     persons_with_disabilities: 2,
            //     number_of_people: 45
            // }
            info.push(some);

        }

        return info;
    }

    const [infoBuilds, setInfoBuilds] = useState(getInfos());



    const [fetching_AllInfoBuilds, isLoading, error] = useFetchingHook(async (limit, page) => {
        // const response_1 = await InfoBuildService.getAllTableParam(tableQuery)
        const {data: response_1} = await InfoBuildService.getAllTableParam(tableQuery)
        // const respons = await InfoBuildService.getAll()
        const {data: response_2} = await InfoBuildService.getAllTableColumns(tableQuery)


        // console.log("response_1 ")
        // console.log(response_1)
        //
        // console.log("response_2 ")
        // console.log(response_2)
        //
        // console.log("ПЕРЕВІРКА НА НАЯВНІСТЬ ID ")
        // console.log(response_2[0].id)


        setTableParam({
            tableName: response_1.tableName,
            accessRight: response_1.accessRight,
            buttons: response_1.buttons,
            searchInclude: response_1.searchInclude,
            listFormParam: response_1.listFormParam
        })

        setForm_FieldName_3( {...response_1.columnsParam} )


        const response_2_data = response_2.map(obg => {
           return  ({...obg.json, id: obg.id})
        })

        console.log(response_2_data)
        setInfoBuilds(response_2_data)
    })


    useEffect(() => {
        fetching_AllInfoBuilds();
        console.log("Виконалась загрузка даних")
    }, [tableQuery]);







    // Пост за id

    console.log("Main_page.jsx") // тимчасово

    // const [infoBuild, setInfoBuild] = useState(getInfos()[5]);
    const [infoBuild, setInfoBuild] = useState(null);






    const [fetching_InfoBuild, isLoading_InfoBuild, error_InfoBuild] = useFetchingHook(async (/*tableName,*/ id) => {
        // const respons = await InfoBuildService.getById(id)
        // setInfoBuild(respons.data)

        // const {data: response} = await InfoBuildService.getTableColumn(tableName, id)
        const {data: response} = await InfoBuildService.getTableColumn(id)
        console.log("ОТРИМАННЯ ІНФОРМАЦІЇ InfoBuild")
        console.log(response.json)
        // setInfoBuild(response.json)
        setInfoBuild({...response.json, id: response.id})
    })

    const [visible, setVisible] = useState(false)
    let vs = false
    // if(id) vs = true
    if(idQuery) vs = true


    useEffect(() => {

        // if (location.pathname.includes('/main/buildInfo') && id !== "0") {
        if (idQuery) {
            // fetching_InfoBuild(tableQuery, idQuery);
            fetching_InfoBuild(idQuery);
            // setInfoBuild(getInfos()[idQuery - 1]) /*ТИМЧАСОВО*/
        }else {
            setInfoBuild(null) /*ТИМЧАСОВО*/
        }

    // }, [id, location.pathname, vs]); /*ТЕЖ ТИМЧАСОВО*/
    }, [idQuery, location.pathname, vs]); /*ТЕЖ ТИМЧАСОВО*/

    useEffect(() => {
        if(infoBuild) {
            setVisible(true)
            console.log(infoBuild)

        }
        else {
            setVisible(false)
            console.log("Такої інфи не існує")
        }
    }, [infoBuild]);

    const form_FieldName = {
        id: "№",
        address: "Адреса",
        electric_box: "Електричний щиток",
        place_of_overlap: "Місце перекриття",
        persons_with_disabilities: "Кількість людей з обмеженою рухливістю",
        number_of_people: "Приблизна кількість людей"
    }

    const form_FieldName_2 = {
        id: {
            name: "№",
            inputType: "number",
            data: infoBuild?.id,
        },
        address: {
            name: "Адреса",
            inputType: "text",
            data: infoBuild?.address
        },
        electric_box:  {
            name: "Електричний щиток",
            inputType: "text",
            data: infoBuild?.electric_box
        },
        place_of_overlap:  {
            name: "Місце перекриття",
            inputType: "text",
            data: infoBuild?.place_of_overlap
        },
        persons_with_disabilities:  {
            name: "Кількість людей з обмеженою рухливістю",
            inputType: "number",
            data: infoBuild?.persons_with_disabilities
        },
        number_of_people:  {
            name: "Приблизна кількість людей",
            inputType: "number",
            data: infoBuild?.number_of_people
        }
    }





    // const newData = {
    //     id: 1,
    //     address: "Київ"
    // }


    console.log("hello _ 165")

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
        fetching_addInfo(tableQuery, {json: infoBuild})
        console.log({json: infoBuild});
    }

    const clearInfo = () => {
        setInfoBuild(null)
    }

    const updateInfo = () => {
        //TODO функціонал для редагування / видалення інфи

        fetching_updateInfo(idQuery, {json: infoBuild})
        console.log({json: infoBuild});


    }


    // let page = Frame_Mode.READ
    //
    // const renderContent = () => {
    //     switch (page) {
    //         case Frame_Mode.READ:
    //         case Frame_Mode.CHANGE:
    //             // return <List_page_content informations={infoBuilds} some_URL="buildInfo" form={{form_FieldName, infoBuild}}/>;
    //             return (
    //                 <List_page_content informations={infoBuilds} setSearchParam={setSearchParam}>
    //
    //                     {page === Frame_Mode.READ &&
    //                         <MyCreateForm frame_mode={Frame_Mode.READ} form={form_FieldName_2} visible={visible}/>
    //                     }
    //                     {page === Frame_Mode.CHANGE &&
    //                         <MyCreateForm frame_mode={Frame_Mode.CHANGE} callback={updateInfo} form={form_FieldName_2} visible={visible} />
    //                     }
    //
    //                 </List_page_content>
    //             )
    //         case Frame_Mode.CREATE:
    //             return <MyCreateForm frame_mode={Frame_Mode.CREATE} callback={addInfo} form={form_FieldName_2}/>;
    //
    //         // default:
    //         //     return <List_page_content informations={infoBuilds}/>;
    //     }
    // }


    console.log(tableQuery === tableParam.tableName, "303")
    console.log(tableParam.tableName)


    return (

        // renderContent()

        <Routes>
            {tableQuery === tableParam.tableName &&
                <Route element={<List_page_content tableParam={tableParam} informations={infoBuilds} setSearchParam={setSearchParam}/>}>
                    <Route path="read" element={ <MyCreateForm frame_mode={Frame_Mode.READ} form={form_FieldName_3}
                                                               data={infoBuild} visible={visible} />}/>

                    <Route path="change" element={ <MyCreateForm frame_mode={Frame_Mode.CHANGE} callback={updateInfo}
                                                                 form={form_FieldName_3} data={infoBuild} setData={setInfoBuild}
                                                                 visible={visible} method={{updateInfo}} />}/>
                </Route>
            }
                <Route path="create" element={<MyCreateForm frame_mode={Frame_Mode.CREATE} data={infoBuild} setData={setInfoBuild}
                                                            callback={addInfo} form={form_FieldName_3} method={{addInfo, clearInfo}}/>}/>

        </Routes>
    );
};

export default MainPage;