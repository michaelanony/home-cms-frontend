import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Switch
} from "react-router-dom";
import "./UserTable.scss";
import { RouteComponentProps } from "react-router";
import { Layout, Table } from 'antd';
import { UserInfo } from "../../Types/Types"
const { Header, Content, Footer, Sider } = Layout;

type Props = {
    columns: any[],
    data: UserInfo[] | undefined
}


const UserTable: React.FC<Props> = ({ columns, data }) => {

    return <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />

}

export default UserTable;