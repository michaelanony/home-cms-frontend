import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Switch
} from "react-router-dom";
import "./MainPage.scss"
import { RouteComponentProps } from "react-router";
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const MainPage: React.FC<RouteComponentProps> = ({ history }) => {
    return (
        <div>

        </div>
    )
}

export default withRouter(MainPage);
