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

}
const LoginRegisterPage: React.FC<{}> = ({ }) => {
    const [isShowResgisterPage, setIsShowRegisterPage] = useState(false)
    const generateForm = () => {
        if (isShowResgisterPage) {
            return <RegisterFrom
                setIsShowRegisterPage={setIsShowRegisterPage}
            />
        } else {
            return <LoginForm
                setIsShowRegisterPage={setIsShowRegisterPage}
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
