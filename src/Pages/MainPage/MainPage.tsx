import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Switch
} from "react-router-dom";
import "./MainPage.scss"
import SiderBar from "../../Components/SiderBar/SiderBar"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { RouteComponentProps } from "react-router";



const MainPage: React.FC<RouteComponentProps> = ({ history }) => {
    return (
        <div className="content">

        </div>
    )
}

export default withRouter(MainPage);
