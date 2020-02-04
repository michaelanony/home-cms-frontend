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


const { SubMenu } = Menu;
const Header: React.FC<{}> = () => {
    if (store.getState().loginStatus.isLogin) {
        return (
            <div className="header-title" >
                <div className="header-title-content">
                    <div className="header-title-content-user">
                        <span>欢迎:</span><span>test</span>
                    </div>
                    <div className="header-title-content-logout">
                        <span>个人中心</span>
                        <span>退出</span>
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
