import React from 'react';
import st from "./MyInput.module.css"
import MyButton from "../button/MyButton";

const MyInput = (props) => { // {inputStyle}

    const { inputStyle, ...restProps } = props;

    const rootClass = [st.Search_2];

    if (inputStyle === "search") rootClass.splice(0,1, st.Search)

    return (
        // <div className={st.Frame}>
        //     <form className={st.FormSearch}>
        //         <input type="text" className={st.Search} name="userInput" placeholder="Ключове слово"/>
        //         {/*<MyButton/>*/}
        //     </form>
        // </div>

        <input className={rootClass.join(" ")} { ...restProps } />
    );
};

export default MyInput;