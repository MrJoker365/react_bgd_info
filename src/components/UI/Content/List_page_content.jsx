import React, {useEffect, useState} from 'react';
import st from "./List_page_content.module.css"
import MyInput from "../input/MyInput";
import MySelect from "../select/MySelect";
import MyList from "./list/MyList";
import MyListForm from "./forms/MyListForm";
import {useParams} from "react-router-dom";
import ListFilter from "../Filter/ListFilter";
import {useFilterHook} from "../../../hooks/useFilterHook";
import MyCreateForm from "./forms/MyCreateForm";

const List_page_content = ({informations,some_URL ,form, data}) => {


    const [visible, setVisible] = useState(false); // тимчасово true

    const [filter, setFilter] = useState({sort: "", query: ""}) // покищо тільки query для MyInput

    console.log(filter.query)

    const sortedAndSearchedList = useFilterHook(informations, "address", filter.sort, filter.query) // власний hook  (usePostsHook.js)

    // const {id} = useParams();
    //
    //
    // if (id === form.infoBuild.id+"") {
    //     setVisible(true);
    // }

    useEffect(() => {
        if (form.infoBuild?.id){
            setVisible(true)
        }
    }, [form]);

    // if (form.infoBuild?.id){
    //     setVisible(true)
    // }

    return (


        <div className={st.Rectangle}>

            <div className={st.Frame1}>
                {/*<div className={st.Alert}>read only</div>*/}

                {/*<MyInput/>*/}
                {/*<MySelect/>*/}

                <ListFilter
                    filter={filter}
                    setFilter={setFilter}
                />

                {/*<MyList informations={informations} some_URL={some_URL} setVisible={setVisible}/>*/}
                <MyList informations={sortedAndSearchedList} some_URL={some_URL} setVisible={setVisible}/>  {/*покищо працює, потім вдосконалю...*/}

                {/*<div style={{display: "flex"}}>*/}
                {/*    /!*<MyList informations={informations}/>*!/*/}
                {/*    /!*<MyListForm/>*!/  /!*ДОБАВИТИ ПОТІМ*!/*/}
                {/*</div>*/}
            </div>

            {/*<MyListForm visible={visible} form={form}/>*/}

            <MyCreateForm form={form} data={data}/>


        </div>

    );
};

export default List_page_content;