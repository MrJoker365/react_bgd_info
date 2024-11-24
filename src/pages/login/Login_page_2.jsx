import React, { useState, useContext } from 'react';
import './Login_page_2.css';
import MyInput from "../../components/UI/input/MyInput";
import { InputStyleConst } from "../../constant/Const";
import { useFetchingHook } from "../../hooks/useFetchingHook";
import InfoBuildService from "../../API/InfoBuildService";
import { AuthContext } from "../../context/context";

function LoginRegister() {
    const { setIsAuth } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    });

    // Clear fields for login
    const clearForLogin = () => {
        setData({ ...data, name: "", confirm_password: "" });
    };

    // Clear fields for registration
    const clearForRegister = () => {
        setData({
            name: "",
            email: "",
            password: "",
            confirm_password: "",
        });
    };

    const [fetching_Login, isLoading_Login, error_Login] = useFetchingHook(async () => {
        const { data: response } = await InfoBuildService.login(data);
        console.log("Received InfoBuild data");
        console.log("TOKEN -----  " + response.token);
        window.localStorage.setItem("auth_token", response.token);
        setIsAuth(true);
    });

    const [fetching_Register, isLoading_Register, error_Register] = useFetchingHook(async () => {
        if (data.password !== data.confirm_password) {
            throw new Error("Passwords do not match");
        }

        const { data: response } = await InfoBuildService.register({
            name: data.name,
            email: data.email,
            password: data.password,
        });

        console.log("Registration successful:", response);
        alert("Registration successful! You can now log in.");
        setIsLogin(true);
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            clearForLogin();
            fetching_Login();
        } else {
            clearForRegister();
            fetching_Register();
        }
    };

    // Handle switching between Login and Register
    const handleToggleForm = (isLoginForm) => {
        setIsLogin(isLoginForm);
        if (isLoginForm) {
            clearForLogin();
        } else {
            clearForRegister();
        }
    };

    return (
        <div className="form-container">
            <div className="form-box">
                <div className="button-group">
                    <button onClick={() => handleToggleForm(true)} aria-pressed={isLogin} aria-label="Switch to Login">
                        Login
                    </button>
                    <button onClick={() => handleToggleForm(false)} aria-pressed={!isLogin} aria-label="Switch to Register">
                        Register
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <label htmlFor="reg-name">Name:</label>
                            <MyInput
                                value={data.name}
                                onChange={e => setData({ ...data, name: e.target.value })}
                                type={"text"}
                                placeholder={"enter your name..."}
                                inputStyle={InputStyleConst.INPUT}
                                id="reg-name"
                                required aria-required="true"
                            />
                        </>
                    )}

                    <label htmlFor="login-email">Email:</label>
                    <MyInput
                        value={data.email}
                        onChange={e => setData({ ...data, email: e.target.value })}
                        type={"email"}
                        placeholder={"enter your email..."}
                        inputStyle={InputStyleConst.INPUT}
                        id="login-email"
                        required aria-required="true"
                    />

                    <label htmlFor="login-password">Password:</label>
                    <MyInput
                        value={data.password}
                        onChange={e => setData({ ...data, password: e.target.value })}
                        type={"password"}
                        placeholder={"enter your password..."}
                        inputStyle={InputStyleConst.INPUT}
                        id="login-password"
                        required aria-required="true"
                    />

                    {isLogin ? (
                        <button type="submit">Login</button>
                    ) : (
                        <>
                            <label htmlFor="confirm-password">Confirm Password:</label>
                            <MyInput
                                value={data.confirm_password}
                                onChange={e => setData({ ...data, confirm_password: e.target.value })}
                                type={"password"}
                                placeholder={"confirm your password..."}
                                inputStyle={InputStyleConst.INPUT}
                                id="confirm-password"
                                required aria-required="true"
                            />
                            <button type="submit">Register</button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

export default LoginRegister;
