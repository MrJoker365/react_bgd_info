import React, {useEffect, useState} from 'react';
import st from "./Navbar.module.css"
import {Link, NavLink, Outlet, useLocation} from "react-router-dom";
import {useFetchingHook} from "../../../hooks/useFetchingHook";
import InfoBuildService from "../../../API/InfoBuildService";

const Navbar = () => {

    const URL = useLocation().pathname;

    const [AllTableNames, setAllTableNames] = useState([])

    const [fetching_AllTableNames, isLoading_AllTableNames, error_AllTableNames] = useFetchingHook(async (id) => {
        const response = await InfoBuildService.getAllTableName(id)
        setAllTableNames(response.data)
    })



    const [active_1, setActive_1] = useState(false);

    const handleClick = () => {
        setActive_1(!active_1);
    };


    const [activeButton_2, setActiveButton_2] = useState('home');
    const [activeButton, setActiveButton] = useState({
        main_buttons: "",
        table_mode:"read",
        selected_table: "",
    });



    useEffect(() => {
        fetching_AllTableNames(1);
    }, [activeButton.main_buttons === 'tables']); /*Варто зробити менш ресурсозатратно...*/


    return (
        <div className={st.Page}>

            <div className={st.Rectangle}>
                <div className={st.Rectangle__fix}>

                    <div className={st.Frame1}>

                        <div className={st.UserName}>User name</div>
                        <div className={st.GoOut}>Go out</div>

                    </div>

                    <div className={st.Frame2}>
                        {/*<div className={st.Frame2_block}>*/}
                        {/*    <div className={st.Icon}/>*/}
                        {/*    <div className={st.Frame2_list}>*/}
                        {/*        /!*<Link to="/main/buildInfo/0" className={st.Link}>Список будинків</Link>*!/*/}
                        {/*        <Link to="/list/read" className={st.Link}>Список будинків</Link>*/}
                        {/*        <nav>*/}
                        {/*            <ul>*/}
                        {/*                <li>*/}
                        {/*                    <Link to="/list/read" className={st.Link}>Read only</Link>*/}
                        {/*                </li>*/}

                        {/*                <li><Link to="/list/create" className={st.Link}>Create new</Link></li>*/}
                        {/*                <li><Link to="/list/change" className={st.Link}>Change/Delete</Link></li>*/}

                        {/*                /!*<li>Delete</li>*!/*/}
                        {/*            </ul>*/}
                        {/*        </nav>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                        {/*<div className={st.Frame2_block}>*/}
                        {/*    <div className={st.Icon}/>*/}
                        {/*    <div className={st.Frame2_list}>*/}
                        {/*        <Link to="/main" className={st.Link}>Користувачі системи</Link>*/}
                        {/*        <nav>*/}
                        {/*            <ul>*/}
                        {/*                <li>Read only</li>*/}
                        {/*                <li>Create new</li>*/}
                        {/*                <li>Change/Update</li>*/}
                        {/*                <li>Delete</li>*/}
                        {/*            </ul>*/}
                        {/*        </nav>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                        {/**/}


                        <div className={st.Frame2_block}>
                            <div className={st.Icon}/>
                            <div className={st.Frame2_list}>
                                {/*<Link to="/main/buildInfo/0" className={st.Link}>Список будинків</Link>*/}

                                <div className={st.Main_buttons}
                                    onClick={() => setActiveButton({...activeButton, main_buttons: "tables"})}
                                    aria-current={activeButton.main_buttons === 'tables' || URL.includes("/list") }

                                ><Link to="/list/read" className={st.Link}

                                >Таблиці</Link></div>

                                <div className={st.RadioButtonsBlock}>
                                    <div
                                        className={st.RadioButton}

                                        onClick={() => setActiveButton({...activeButton, table_mode: "read"})}
                                        // className={activeButton_2 === 'read_only' ? 'active' : ''}
                                        aria-current={activeButton.table_mode === 'read'}

                                    ><Link to="/list/read" className={st.Link}>Read</Link></div>

                                    <div
                                        className={st.RadioButton}

                                        onClick={() => setActiveButton({...activeButton, table_mode: "change"})}
                                        aria-current={activeButton.table_mode === 'change'}

                                    ><Link to="/list/change" className={st.Link}>Change</Link></div>

                                    <div
                                        className={st.RadioButton}

                                        onClick={() => setActiveButton({...activeButton, table_mode: "create"})}
                                        aria-current={activeButton.table_mode === 'create'}

                                    ><Link to="/list/create" className={st.Link}>Create</Link></div>
                                </div>

                                <nav>
                                    <ul>

                                        {AllTableNames.map((entity) =>
                                            <li
                                                onClick={() => setActiveButton({...activeButton, selected_table: entity})}
                                                aria-current={activeButton.selected_table === entity}
                                            >
                                                {entity}
                                            </li>
                                        )}

                                        {/*<li*/}
                                        {/*    onClick={() => setActiveButton_2('create_new')}*/}
                                        {/*    className={activeButton_2 === 'create_new' ? 'active' : ''}*/}
                                        {/*    aria-current={activeButton_2 === 'create_new'}*/}
                                        {/*><Link to="/list/create" className={st.Link}>Create new</Link></li>*/}


                                        {/*<li>Delete</li>*/}
                                    </ul>
                                </nav>
                            </div>
                        </div>


                        {/**/}




                        {/**/}


                        <div className={st.Frame2_block}>
                            <div className={st.Icon}/>
                            <div className={st.Frame2_list}>
                                {/*<Link to="/main/buildInfo/0" className={st.Link}>Список будинків</Link>*/}
                                <div className={st.Main_buttons}
                                    onClick={() => setActiveButton({...activeButton, main_buttons: "create_new_table"})}
                                    aria-current={activeButton.main_buttons === 'create_new_table'}
                                ><Link to="/newtabletemplate" className={st.Link}

                                >Своритти таблицю</Link> </div>

                            </div>
                        </div>





                        <div className={st.Frame2_block}>
                            <div className={st.Icon}/>
                            <div className={st.Frame2_list}>
                                {/*<Link to="/main/buildInfo/0" className={st.Link}>Список будинків</Link>*/}
                                <div className={st.Main_buttons}
                                     onClick={() => setActiveButton({...activeButton, main_buttons: "system_users"})}
                                     aria-current={activeButton.main_buttons === 'system_users'}
                                ><Link to="/users" className={st.Link}

                                >Користувачі системи</Link> </div>

                            </div>
                        </div>




                        {/**/}



                    </div>

                </div>

            </div>

            <Outlet/>

        </div>
    );
};

export default Navbar;