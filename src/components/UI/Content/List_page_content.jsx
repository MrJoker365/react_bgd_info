import React, {useEffect, useState} from 'react';
import st from "./List_page_content.module.css"
import MyInput from "../input/MyInput";
import MySelect from "../select/MySelect";
import MyList from "./list/MyList";
import MyListForm from "./forms/MyListForm";
import {Outlet, useParams} from "react-router-dom";
import ListFilter from "../Filter/ListFilter";
import {useFilterHook} from "../../../hooks/useFilterHook";
import MyCreateForm from "./forms/MyCreateForm";

const List_page_content = ({children, informations, setSearchParam}) => {


    const [visible, setVisible] = useState(false); // тимчасово true

    const [filter, setFilter] = useState({sort: "", query: ""}) // покищо тільки query для MyInput

    console.log(filter.query)

    const sortedAndSearchedList = useFilterHook(informations, "address", filter.sort, filter.query) // власний hook  (usePostsHook.js)



    // useEffect(() => {
    //     if (form.infoBuild?.id){
    //         setVisible(true)
    //     }
    // }, [form]);


    return (


        <div className={st.Rectangle}>

            <div className={st.Frame1}>


                <ListFilter
                    filter={filter}
                    setFilter={setFilter}
                />

                <MyList informations={sortedAndSearchedList} setVisible={setVisible} setSearchParam={setSearchParam}/>  {/*покищо працює, потім вдосконалю...*/}


            </div>


            {children}

            <Outlet/>  {/*або children, або Outlet*/}


        </div>

    );
};

export default List_page_content;