import React from 'react';
import st from "./MyFormAlert.module.css"
import {Frame_Mode} from "../../../constant/Const";

const MyFormAlert = ({frame_mode}) => {

    const rootClasses = [st.Alert]
    let text = ""

    switch (frame_mode) {
        case Frame_Mode.READ: rootClasses.push(st.color_green); text = "read only"
            break;
        case Frame_Mode.CHANGE: rootClasses.push(st.color_yellow); text = "change/delete"
            break;
        case Frame_Mode.CREATE: rootClasses.push(st.color_blue); text = "create"
            break;

    }

    return (
        <div className={rootClasses.join(" ")}>{text}</div>
    );
};

export default MyFormAlert;