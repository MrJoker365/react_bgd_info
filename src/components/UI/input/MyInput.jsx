import React from 'react';
import st from "./MyInput.module.css"
import MyButton from "../button/MyButton";
import {InputStyleConst} from "../../../constant/Const";

const MyInput = (props) => { // {inputStyle}

    const { inputStyle, ...restProps } = props;

    const rootClass = []; // Класи зі стилями поля вводу
    // const rootClass = [st.Search_2];
    // if (inputStyle === "search") rootClass.splice(0,1, st.Search)

    switch (inputStyle) {
        case InputStyleConst.INPUT:
            rootClass.push(st.Search_2);
            break;
        case InputStyleConst.SEARCH:
            rootClass.push(st.Search);
            break;
        case InputStyleConst.FIELD_NAME:
            rootClass.push(st.Search_3);
            break;
        default:
            rootClass.push(st.Search_2);
            break;
    }

    return (
        // <div className={st.Frame}>
        //     <form className={st.FormSearch}>
        //         <input type="text" className={st.Search} name="userInput" placeholder="Ключове слово"/>
        //         {/*<MyButton/>*/}
        //     </form>
        // </div>


        <input className={rootClass.join(" ")} { ...restProps }/>
        // <input onBeforeInput={}/>
    );
};

export default MyInput;