import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Switch
} from "react-router-dom";
import "./Footer.scss";

import { Menu } from 'antd';
const { SubMenu } = Menu;
const Header: React.FC = ({ }) => {

    return (
        <div className="foot_content" >Home CMS ©2020 Created by ChenBo</div>

    )
}

export default withRouter(Header);
