import React, {useEffect, useState} from 'react';
import "../styles/App.css"
import Navbar from "../components/UI/Navbar/Navbar";
import List_page_content from "../components/UI/Content/List_page_content";
import {useFetchingHook} from "../hooks/useFetchingHook";
import InfoBuildService from "../API/InfoBuildService";
import {Outlet, Route, Routes, useLocation, useParams} from "react-router-dom";
import MyCreateForm from "../components/UI/Content/forms/MyCreateForm";
// import Frame_Mode from "../constant/Const";

import {Frame_Mode, InputStyleConst} from "../constant/Const";


const MainPage = () => {


    // Весь список
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



    const [fetching_AllInfoBuilds, isLoading, error] = useFetchingHook(async (limit, page) => {
        const respons = await InfoBuildService.getAll()
        setInfoBuilds(respons.data)
    })


    useEffect(() => {
        fetching_AllInfoBuilds();
    }, []);







    // Пост за id

    console.log("Main_page.jsx") // тимчасово

    // const [infoBuild, setInfoBuild] = useState(getInfos()[5]);
    const [infoBuild, setInfoBuild] = useState(null);


    const {id} = useParams();
    const location = useLocation();


    const [fetching_InfoBuild, isLoading_InfoBuild, error_InfoBuild] = useFetchingHook(async (id) => {
        const respons = await InfoBuildService.getById(id)
        setInfoBuild(respons.data)
    })

    const [visible, setVisible] = useState(false)
    let vs = false
    if(id) vs = true


    useEffect(() => {

        if (location.pathname.includes('/main/buildInfo') && id !== "0") {
            fetching_InfoBuild(id);
            setInfoBuild(getInfos()[id - 1]) /*ТИМЧАСОВО*/
        }else {
            setInfoBuild(null) /*ТИМЧАСОВО*/
        }

    }, [id, location.pathname, vs]); /*ТЕЖ ТИМЧАСОВО*/

    useEffect(() => {
        if(infoBuild) {
            setVisible(true)
            console.log(infoBuild)

        }
        else {
            setVisible(false)
            console.log(infoBuild)
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




    // Добавлення інформації

    const [addInfo] = useFetchingHook(async (data) => {
        const response = InfoBuildService.add(data)
        console.log(response) // потім треба буде обробляти на наявність такох інфи або іншу некоректність
    })

    const createInfo = (newData) => {
        addInfo(newData)
    }

    const changeInfo = (newData) => {
        //TODO функціонал для редагування / видалення інфи
    }

    let page = Frame_Mode.READ

    const renderContent = () => {
        switch (page) {
            case Frame_Mode.READ:
            case Frame_Mode.CHANGE:
                // return <List_page_content informations={infoBuilds} some_URL="buildInfo" form={{form_FieldName, infoBuild}}/>;
                return (
                    <List_page_content informations={infoBuilds}>

                        {page === Frame_Mode.READ &&
                            <MyCreateForm frame_mode={Frame_Mode.READ} form={form_FieldName_2} visible={visible}/>
                        }
                        {page === Frame_Mode.CHANGE &&
                            <MyCreateForm frame_mode={Frame_Mode.CHANGE} callback={changeInfo} form={form_FieldName_2} visible={visible} />
                        }

                    </List_page_content>
                )
            case Frame_Mode.CREATE:
                return <MyCreateForm frame_mode={Frame_Mode.CREATE} callback={createInfo} form={form_FieldName_2}/>;

            // default:
            //     return <List_page_content informations={infoBuilds}/>;
        }
    }



    return (
        // <List_page_content informations={infoBuilds} some_URL="buildInfo" form={{form_FieldName, infoBuild}}/>

         // <MyCreateForm/>

        renderContent()
    );
};

export default MainPage;