import React from "react";
import {
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import LoginPage from "./Pages/LoginRegisterPage/LoginRegisterPage"
import { createUserLoginWithSSO } from "./Store/actions/userAcitonCreators";
import './App.scss'
import SiderBar from "./Components/SiderBar/SiderBar"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { useDispatch, useSelector } from "react-redux";
import { routes } from "./Router/index";
function App() {
    const token = localStorage.getItem("ac-token")
    const dispatch = useDispatch()
    const isLogin = useSelector((state: any) => state.userReducer.isLogin)
    if (token && !isLogin) {
        dispatch(createUserLoginWithSSO(token))
    }
    const generatorContent = () => {
        if (token) {
            return (
                <Switch>
                    {
                        routes.map((v, index) => {
                            return (
                                <Route path={v.path} component={v.component} key={index} />
                            )
                        })
                    }
                    <Redirect to="/index" />

                </Switch>


            )
        } else {
            return (
                <Switch>

                    <Route path="/login" component={LoginPage} />
                    <Redirect to="/login" />
                </Switch>
            )
        }
    }

    return (
        <div className="content">
            <div className="content">
                <SiderBar
                    isLogin={isLogin}
                />
                <div className="right-content">
                    <Header
                    />
                    <div className="app_content">
                        {generatorContent()}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default App;