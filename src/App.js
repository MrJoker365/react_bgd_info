import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Main_page from "./pages/Main_page";
import CreateTable_page from "./pages/CreateTable_page";
import SystemUsers_page from "./pages/SystemUsers_page";
import Login_page_2 from "./pages/login/Login_page_2";
import { useEffect, useState } from "react";
import { AuthContext } from "./context/context";
import { getAuthToken } from "./API/InfoBuildService"; // Import the utility function

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const token = getAuthToken(); // Use the utility function to get the token
        setIsAuth(!!token); // Set isAuth based on the presence of the token
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {isAuth ? (
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route path="*" element={<Navigate to="/" />} />
                        <Route path="list/*" element={<Main_page />} />
                        <Route path="users/*" element={<SystemUsers_page />} />
                        <Route path="newtabletemplate" element={<CreateTable_page />} />
                    </Route>
                </Routes>
            ) : (
                <Routes>
                    <Route path="/login" element={<Login_page_2 />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            )}
        </AuthContext.Provider>
    );
}

export default App;