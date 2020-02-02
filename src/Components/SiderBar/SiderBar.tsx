import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Switch
} from "react-router-dom";
import "./SiderBar.scss";
import { RouteComponentProps } from "react-router";
import { City } from "../../Types/Types"
import { Menu, Icon } from 'antd';
import { apiGetAllCities } from "../../Api/services"
const { SubMenu } = Menu;

type Props = {
    isLogin: boolean
}
const SiderBar: React.FC<Props> = ({ isLogin }) => {
    const [cityList, setCityList] = useState<City[]>([])
    useEffect(() => {
        apiGetAllCities().then(res => {
            console.log(res)
            setCityList(res.data)
        })
    }, [])
    const generateSiderBar = () => {
        if (isLogin)
            return (
                <div>
                    < Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                        <SubMenu key="user" title="用户管理">
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span className="nav-text">用户成员信息</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="user" />
                                <span className="nav-text">用户行为日志</span>
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="fy" title="肺炎各地区疫情">
                            <Menu.Item key="3">
                                <span className="nav-text">肺炎全国实时疫情</span>
                            </Menu.Item>
                            {
                                cityList.map((city, key) => {
                                    return (
                                        <Menu.Item key={key}>

                                            <span className="nav-text">{city.city_name}</span>
                                        </Menu.Item>
                                    )
                                })
                            }


                        </SubMenu>
                    </Menu>
                </div>)
    }
    return (
        <div className="left-content">

            <div className="mp_sb_icon">
                <div>Welcome!</div>
            </div>
            {generateSiderBar()}

        </div>
    )
}

export default SiderBar;
