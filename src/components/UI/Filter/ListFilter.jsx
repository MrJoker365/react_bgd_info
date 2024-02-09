import React from 'react';
import MyInput from "../input/MyInput";
import MySelect from "../select/MySelect";
import st from "./ListFilter.module.css"

const ListFilter = ({filter, setFilter}) => {



    return (
        <div className={st.Frame}>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Пошук..."

            />
            <MySelect/>

        </div>
    );
};

export default ListFilter;