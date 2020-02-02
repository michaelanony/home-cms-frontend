import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Switch
} from "react-router-dom";
import "./Footer.scss";
import { RouteComponentProps } from "react-router";
import { UserInfo } from "../../Types/Types"
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const Header: React.FC<RouteComponentProps> = ({ history }) => {

    return (
        <div className="foot_content" >Home CMS ©2020 Created by ChenBo</div>

    )
}

export default withRouter(Header);
