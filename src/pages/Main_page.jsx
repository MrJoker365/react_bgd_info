import React, {useEffect, useState} from 'react';
import "../styles/App.css"
import Navbar from "../components/UI/Navbar/Navbar";
import List_page_content from "../components/UI/Content/List_page_content";
import {useFetchingHook} from "../hooks/useFetchingHook";
import InfoBuildService from "../API/InfoBuildService";
import {Outlet, Route, Routes, useLocation, useParams} from "react-router-dom";


const MainPage = () => {

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





    console.log("Main_page.jsx") // тимчасово

    // const [infoBuild, setInfoBuild] = useState(getInfos()[5]);
    const [infoBuild, setInfoBuild] = useState({});


    const {id} = useParams();
    const location = useLocation();


    const [fetching_InfoBuild, isLoading_InfoBuild, error_InfoBuild] = useFetchingHook(async (id) => {
        const respons = await InfoBuildService.getById(id)
        setInfoBuild(respons.data)
    })


    useEffect(() => {

        if (location.pathname.includes('/main/buildInfo') && id !== "0") {
            fetching_InfoBuild(id);
            setInfoBuild(getInfos()[id - 1]) /*ТИМЧАСОВО*/
        }

    }, [id, location.pathname]); /*ТЕЖ ТИМЧАСОВО*/



    const form_FieldName = {
        id: "№",
        address: "Адреса",
        electric_box: "Електричний щиток",
        place_of_overlap: "Місце перекриття",
        persons_with_disabilities: "Кількість людей з обмеженою рухливістю",
        number_of_people: "Приблизна кількість людей"
    }






    return (

        <List_page_content informations={infoBuilds} some_URL="buildInfo" form={{form_FieldName, infoBuild}}/>



    );
};

export default MainPage;