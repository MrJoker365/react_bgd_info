import React from 'react';
import st from "./MyList.module.css"
import {useLocation, useNavigate, useParams} from "react-router-dom";

const MyList = ({tableParam, informations, setVisible, setSearchParam}) => {

    const navigate = useNavigate();
    const {id} = useParams();
    const location = useLocation().pathname;

    return (
        <div className={st.Frame}>
            {informations.map((info) =>

                <div className={st.Row} onClick={() => {
                    // navigate(`/main/${some_URL}/${info.id}`); // передача динамічної URL
                    {if (!id) console.log("id відсутнє")}
                    // navigate(location.replace(`/${id}`, `/${info.id}`)); // передача динамічної URL
                    setSearchParam({id: info.id});

                    setVisible(true); // При клікані робить форму видимою
                } }
                     key={info.id}
                >
                    <div>
                        <div className={st.D_1}>{info[tableParam.listFormParam.v_1]}</div>
                        <div className={st.D_2}>{info[tableParam.listFormParam.v_2]}</div>
                        <div className={st.D_3}>{info[tableParam.listFormParam.v_3]}</div>
                    </div> {/*TODO замінити на динамічну*/}

                    <div className={st.D_4}>{info[tableParam.listFormParam.v_4]}</div>
                </div>

            )}

        {/*    <div className={st.Row}>*/}
        {/*        <div>*/}
        {/*            м.Львів <br/>*/}
        {/*            вул.Івана Франка 104*/}
        {/*        </div>*/}
        {/*        <div>01/2023</div>*/}
        {/*    </div>*/}
        {/*    <div className={st.Row}>*/}
        {/*        <div>м.Львів вул.</div>*/}
        {/*        <div>03/2012</div>*/}
        {/*    </div>*/}
        {/*    <div className={st.Row}>*/}
        {/*        <div>м.Львів вул.Івана Франка 104</div>*/}
        {/*        <div>07/2019</div>*/}
        {/*    </div>*/}
        </div>
    );
};

export default MyList;