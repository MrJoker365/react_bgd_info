import React, {useEffect, useState} from 'react';
import "../styles/App.css"
import Navbar from "../components/UI/Navbar/Navbar";
import List_page_content from "../components/UI/Content/List_page_content";
import {useFetchingHook} from "../hooks/useFetchingHook";
import InfoBuildService from "../API/InfoBuildService";


const MainPage = () => {

    let getInfos = () => {

        let info = [];

        for (let i = 0; i < 20; i++) {


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

    const [infoBuild, setInfoBuild] = useState(getInfos());



    // const [infoBuild, setInfoBuild] = useState([
    //     {
    //         id: 1,
    //         address: `м.Львів вул.Івана Франка ${100} `,
    //         electric_box: "4 поверх",
    //         place_of_overlap: "1 поверх",
    //         persons_with_disabilities: 2,
    //         number_of_people: 45
    //     }
    // ]);


    const [fetchInfoBuild, isLoading, error] = useFetchingHook(async (limit, page) => {
        const respons = await InfoBuildService.getAll()
        setInfoBuild(respons.data)
    })

    useEffect(() => {
        fetchInfoBuild();
    }, []);









    return (
        <div className="App">
            <Navbar/>
            <List_page_content informations={infoBuild}/>
            {/*<div>Helloddddd</div>*/}
        </div>
    );
};

export default MainPage;