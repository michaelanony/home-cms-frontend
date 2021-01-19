import React from 'react'
import './MineCenter.scss'
import { RouteComponentProps } from "react-router";
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Switch
} from "react-router-dom";

const MineCenter: React.FC = () => {
    return (
        <div>Mine</div>
    )
}

export default withRouter(MineCenter);