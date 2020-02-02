import React, { useEffect, useState } from 'react';
import routers from './Router'
import SiderBar from "./Components/SiderBar/SiderBar"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import LoginRegisterPage from "./Pages/LoginRegisterPage/LoginRegisterPage"
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.scss'
const App: React.FC = () => {
    const [login, setLogin] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<string>('')
    const generateContent = () => {
        if (login) {
            return (
                <div>
                    {
                        routers.map((route, key) => {
                            if (route.exact) {
                                return (<Route key={key} path={route.path} render={props => (<route.component {...props} />)} />)
                            } else {
                                return (<Route key={key} path={route.path} render={props => (<route.component {...props} />)} />)
                            }
                        })
                    }</div>
            )
        } else {
            return (
                <LoginRegisterPage
                    setLogin={setLogin}
                    setCurrentUser={setCurrentUser}
                />
            )
        }
    }
    return (
        <Router>
            <div className="content">
                <SiderBar
                    isLogin={login}
                />
                <div className="right-content">
                    <Header
                        isLogin={login}
                        currentUser={currentUser}
                    />
                    <div className="app_content">
                        {generateContent()}</div>

                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
