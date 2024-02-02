import React, {useEffect, useState} from 'react';
import st from "./List_page_content.module.css"
import MyInput from "../input/MyInput";
import MySelect from "../select/MySelect";
import MyList from "./list/MyList";
import MyListForm from "./forms/MyListForm";
import {useParams} from "react-router-dom";

const List_page_content = ({informations,some_URL ,form}) => {


    const [visible, setVisible] = useState(false); // тимчасово true

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
                <MyInput/>
                <MySelect/>
                <MyList informations={informations} some_URL={some_URL} setVisible={setVisible}/>
                {/*<div style={{display: "flex"}}>*/}
                {/*    /!*<MyList informations={informations}/>*!/*/}
                {/*    /!*<MyListForm/>*!/  /!*ДОБАВИТИ ПОТІМ*!/*/}
                {/*</div>*/}
            </div>

            <MyListForm visible={visible} form={form}/>


        </div>

    );
};

export default List_page_content;