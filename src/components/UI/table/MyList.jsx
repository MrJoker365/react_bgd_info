import React from 'react';
import st from "./MyList.module.css"

const MyList = ({informations}) => {

    return (
        <div className={st.Frame}>
            {informations.map((info) =>

                <div className={st.Row}>
                    <div>{info.address}</div>
                    <div>01/2023</div>
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