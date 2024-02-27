import React from 'react';
import st from "./Navbar.module.css"
import {Link, NavLink, Outlet} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={st.Page}>

            <div className={st.Rectangle}>
                <div className={st.Rectangle__fix}>

                    <div className={st.Frame1}>

                        <div className={st.UserName}>User name</div>
                        <div className={st.GoOut}>Go out</div>

                    </div>

                    <div className={st.Frame2}>
                        <div className={st.Frame2_block}>
                            <div className={st.Icon}/>
                            <div className={st.Frame2_list}>
                                {/*<Link to="/main/buildInfo/0" className={st.Link}>Список будинків</Link>*/}
                                <Link to="/list/read" className={st.Link}>Список будинків</Link>
                                <nav>
                                    <ul>
                                        <li><Link to="/list/read" className={st.Link}>Read only</Link></li>
                                        <li><Link to="/list/create" className={st.Link}>Create new</Link></li>
                                        <li><Link to="/list/change" className={st.Link}>Change/Delete</Link></li>

                                        {/*<li>Delete</li>*/}
                                    </ul>
                                </nav>
                            </div>
                        </div>


                        <div className={st.Frame2_block}>
                            <div className={st.Icon}/>
                            <div className={st.Frame2_list}>
                                <Link to="/main" className={st.Link}>Користувачі системи</Link>
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

            </div>

            <Outlet/>

        </div>
    );
};

export default Navbar;