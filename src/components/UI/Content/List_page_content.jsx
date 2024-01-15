import React from 'react';
import st from "./List_page_content.module.css"
import MyInput from "../input/MyInput";
import MySelect from "../select/MySelect";
import MyList from "../table/MyList";
import MyListForm from "../forms/MyListForm";

const List_page_content = ({informations}) => {
    return (
        <div className={st.Rectangle}>
            <div className={st.Alert}>read only</div>
            <MyInput/>
            <MySelect/>
            <div style={{display: "flex"}}>
                <MyList informations={informations}/>
                <MyListForm/>
            </div>
        </div>
    );
};

export default List_page_content;