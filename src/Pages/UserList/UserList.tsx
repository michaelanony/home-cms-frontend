import React, { useState, useEffect } from 'react'
import {
    withRouter,
} from "react-router-dom";
import "./UserList.scss";
import UserTable from "../../Components/UserTable/UserTable"
import { apiGetAllUsers } from "../../Api/services"
import { UserInfo } from "../../Types/Types"
const columns = [
    {
        title: 'UserId',
        width: 100,
        dataIndex: 'u_id',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'UserName',
        width: 100,
        dataIndex: 'u_name',
        key: 'age',
        fixed: 'left',
    },
    {
        title: 'UserNickname',
        dataIndex: 'u_nickname',
        key: '1',
        width: 150,
    },
    {
        title: 'UserPassword',
        dataIndex: 'u_password',
        key: '2',
        width: 150,
    },
    {
        title: 'UserLevel',
        dataIndex: 'u_level',
        key: '3',
        width: 150,
    },
    {
        title: 'IsAdmin',
        dataIndex: 'u_admin',
        key: '4',
        width: 150,
    },
    {
        title: 'RegisterIP',
        dataIndex: 'u_register_ip',
        key: '5',
        width: 150,
    },
    {
        title: 'RegisterTime',
        dataIndex: 'u_create_time',
        key: '6',
        width: 150,
    },
    {
        title: 'UpdateTime',
        dataIndex: 'u_modify_time',
        key: '7',
        width: 150,
    },
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <button>删除</button>,
    },
];

const UserList: React.FC = () => {
    const [data, setData] = useState<UserInfo[]>([]);
    useEffect(() => {
        apiGetAllUsers().then(res => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])
    return (
        <div>
            <div className="user-table-title">用户列表</div>
            <UserTable
                data={data}
                columns={columns}
            />
        </div>
    )
}

export default withRouter(UserList);
