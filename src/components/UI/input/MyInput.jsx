import React from 'react';
import st from "./MyInput.module.css"
import MyButton from "../button/MyButton";

const MyInput = () => {
    return (
        <div className={st.Frame}>
            <form className={st.FormSearch}>
                <input type="text" className={st.Search} name="userInput" placeholder="Ключове слово"/>
                <MyButton/>
            </form>
        </div>
    );
};

export default MyInput;