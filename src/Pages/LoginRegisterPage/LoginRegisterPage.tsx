import React, { useState, Dispatch } from 'react'
import RegisterFrom from "../../Components/RegisterForm/RegisterForm"
import LoginForm from "../../Components/LoginForm/LoginForm"
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Switch
} from "react-router-dom";
import "./LoginRegisterPage.scss"
import { RouteComponentProps } from "react-router";
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
type Props = {
    setLogin: Dispatch<boolean>,
    setCurrentUser: Dispatch<string>
}
const LoginRegisterPage: React.FC<Props> = ({ setLogin, setCurrentUser }) => {
    const [isShowResgisterPage, setIsShowRegisterPage] = useState(false)
    const generateForm = () => {
        if (isShowResgisterPage) {
            return <RegisterFrom
                setIsShowRegisterPage={setIsShowRegisterPage}
            />
        } else {
            return <LoginForm
                setLogin={setLogin}
                setIsShowRegisterPage={setIsShowRegisterPage}
                setCurrentUser={setCurrentUser}
            />
        }
    }
    return (
        <div className="form-position">
            {generateForm()}
        </div>
    )
}

export default LoginRegisterPage;
