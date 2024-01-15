import React from 'react';
import st from "./MySelect.module.css"

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        // <select
        //     value={value}
        //     onChange={event => onChange(event.target.value)}
        // >
        //     <option disabled={true} value="" > {defaultValue}</option>
        //     {options.map(option =>
        //         <option key={option.value} value={option.value}>
        //             {option.name}
        //         </option>
        //     )}
        // </select>

        <div className={st.Frame}>
            <div className={st.Icon}/>

            <select>
                <option defaultValue> All items </option>
                <option> Люди з обмеженою рухливістю </option>
                <option> Львів</option>
                <option> Личаківська</option>
            </select>

        </div>


    );
};

export default MySelect;