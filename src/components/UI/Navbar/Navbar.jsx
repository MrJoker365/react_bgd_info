import React from 'react';
import st from "./Navbar.module.css"
import {Outlet} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={st.Rectangle}>
            <div className={st.Frame1}>

                <div className={st.UserName}>User name</div>
                <div className={st.GoOut}>Go out</div>

            </div>

            <div className={st.Frame2}>
                <div className={st.Frame2_block}>
                    <div className={st.Icon}/>
                    <div className={st.Frame2_list}>
                        Список будинків
                        <nav>
                            <ul>
                                <li>Read only</li>
                                <li>Create new</li>
                                <li>Change/Update</li>
                                <li>Delete</li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navbar;