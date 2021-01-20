import React, { useState, useEffect } from 'react'
import {
    withRouter,
} from "react-router-dom";
import "./UserList.scss";
import UserTable from "../../Components/UserTable/UserTable"
import { apiGetAllUsers } from "../../Api/services"
import { UserInfo } from "../../Types/Types"
import store from '../../Store';

const columns = [
    {
        title: '用户ID',
        width: 100,
        dataIndex: 'user_id',
        key: 'name',
        fixed: 'left',
    },
    {
        title: '用户名',
        width: 100,
        dataIndex: 'user_name',
        key: 'age',
        fixed: 'left',
    },
    {
        title: '用户密码',
        dataIndex: 'user_password',
        key: '2',
        width: 150,
    },
    {
        title: '用户权限',
        dataIndex: 'user_role',
        key: '3',
        width: 150,
        render: (role: number) => {
            switch (role) {
                case 1:
                    return <div>管理员</div>
                case 2:
                    return <div>超级管理员</div>
                default:
                    return <div>普通成员</div>
            }

        }
    },
    {
        title: '注册IP',
        dataIndex: 'user_register_ip',
        key: '5',
        width: 150,
    },
    {
        title: '注册时间',
        dataIndex: 'create_time',
        key: '6',
        width: 150,
    },
    {
        title: '更新时间',
        dataIndex: 'update_time',
        key: '7',
        width: 150,
    },
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (ctx: any) => {
            if (ctx.user_name === store.getState().userReducer.userName) {
                return (<div></div>)
            }
            else {
                return (<button>删除</button>)
            }
        }
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
