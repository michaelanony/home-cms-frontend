import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Switch
} from "react-router-dom";
import "./Header.scss";
import { RouteComponentProps } from "react-router";
import { UserInfo } from "../../Types/Types"
import { Menu, Icon } from 'antd';
import store from "../../Store/index"
import { actions } from "../../Store/actions/actionCreators";
import { apiCheckLogin } from "../../Api/services"
import { setCookie, getCookie } from "../../lib/util"
const { SubMenu } = Menu;
const Header: React.FC<{}> = () => {
    const getCurrentUser = () => {
        apiCheckLogin().then(res => {
            console.log(res.data)
        })
    }
    const user = getCookie("username")
    const exitLogin = () => {
        setCookie("username", "", -1);
        setCookie("SESSIONID", "", -1)
        store.dispatch(actions.apiResponseUnauthorized())
    }
    if (store.getState().loginStatus.isLogin) {
        return (
            <div className="header-title" >
                <div className="header-title-content">
                    <div className="header-title-content-user">
                        <span>欢迎:</span><span>{user}</span>
                    </div>
                    <div className="header-title-content-logout">
                        <span onClick={() => getCurrentUser()}>个人中心</span>
                        <span onClick={() => exitLogin()}>退出</span>
                    </div>
                </div>

            </div>
        )
    } else {
        return <div className="header-title" >
            <div className="header-notlogin">欢迎使用用户管理系统</div>
        </div>

    }
}

export default Header;
