import React from 'react';
import st from "./MyListForm.module.css"

const MyListForm = ({visible, form}) => {

    const rootClasses = [st.Rectangle]

    if (visible){
        rootClasses.push(st.Visible)
    }

    return (

        <div className={rootClasses.join(" ")}>

            <div className={st.Alert}>read only</div>

            <div className={st.Frame}>

                {
                    Object.keys(form.form_FieldName).map(key => /*Перераховую по ключовому значенню об'єкта*/
                        <div className={st.Row} key={key}>
                            <div>{form.form_FieldName[key]}</div> {/*form_FieldName  -   ТИМЧАСОВО*/}
                            <div>{form.infoBuild[key]}</div> {/*ТЕЖ ТИМЧАСОВО*/}
                        </div>
                    )
                }

                {/*<div className={st.Row}>*/}
                {/*    <div>Адреса</div>*/}
                {/*    <div>м.Львів вул.Івана Франка 101</div>*/}
                {/*</div>*/}
                {/*<div className={st.Row}>*/}
                {/*    <div>Місце відключення електрики</div>*/}
                {/*    <div>4 поверх</div>*/}
                {/*</div>*/}
                {/*<div className={st.Row}>*/}
                {/*    <div>Місце перекриття</div>*/}
                {/*    <div>1 поверх</div>*/}
                {/*</div>*/}
                {/*<div className={st.Row}>*/}
                {/*    <div>Люди з обмеженою рухливістю</div>*/}
                {/*    <div>2</div>*/}
                {/*</div>*/}
                {/*<div className={st.Row}>*/}
                {/*    <div>Кількість людей</div>*/}
                {/*    <div>45</div>*/}
                {/*</div>*/}
            </div>

            {/*<div className={st.Frame2}>*/}
            {/*    Hello*/}
            {/*</div>*/}

        </div>


    );
};

export default MyListForm;