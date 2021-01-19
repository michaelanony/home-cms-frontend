import React from 'react'

import "./UserTable.scss";

import { Table } from 'antd';
import { UserInfo } from "../../Types/Types"


type Props = {
    columns: any[],
    data: UserInfo[] | undefined
}


const UserTable: React.FC<Props> = ({ columns, data }) => {

    return <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />

}

export default UserTable;