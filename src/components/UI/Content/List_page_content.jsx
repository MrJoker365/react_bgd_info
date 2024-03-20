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

const List_page_content = ({children, tableParam, informations, setSearchParam}) => {


    const [visible, setVisible] = useState(false); // тимчасово true

    const [filter, setFilter] = useState({sort: "", query: ""}) // покищо тільки query для MyInput

    console.log(filter.query)

    const sortedAndSearchedList = useFilterHook(informations, "address", filter.sort, filter.query)

    // const sortedAndSearchedList = informations === null
    //     ? ""
    //     : useFilterHook(informations, "address", filter.sort, filter.query)



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

                {tableParam.accessRight
                    ? <div className={st.AccessRight}>{tableParam.accessRight}</div>
                    : <div className={st.AccessRight}>Права доступу...</div>

                }

                {tableParam.tableName
                    ? <div className={st.TableName}>{tableParam.tableName}</div>
                    : <div className={st.TableName} style={{color: "#858585"}}>Назва таблиці...</div>

                }


                <MyList tableParam={tableParam} informations={sortedAndSearchedList} setVisible={setVisible} setSearchParam={setSearchParam}/>  {/*покищо працює, потім вдосконалю...*/}


            </div>


            {children}

            <Outlet/>  {/*або children, або Outlet*/}

            {/*<div className={st.Frame2}>*/}

            {/*</div>*/}

        </div>

    );
};

export default List_page_content;