import React from 'react';
import st from "./MyListForm.module.css"

const MyListForm = () => {
    return (
        <div className={st.Frame}>
            <div className={st.Row}>
                <div>Адреса</div>
                <div>м.Львів вул.Івана Франка 101</div>
            </div>
            <div className={st.Row}>
                <div>Місце відключення електрики</div>
                <div>4 поверх</div>
            </div>
            <div className={st.Row}>
                <div>Місце перекриття</div>
                <div>1 поверх</div>
            </div>
            <div className={st.Row}>
                <div>Люди з обмеженою рухливістю</div>
                <div>2</div>
            </div>
            <div className={st.Row}>
                <div>Кількість людей</div>
                <div>45</div>
            </div>
        </div>
    );
};

export default MyListForm;