import React from 'react'
import "./SiderBar.scss";

import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

interface Props {
    isLogin: boolean
}
const SiderBar: React.FC<Props> = ({ isLogin }) => {
    const generateSiderBar = () => {
        if (isLogin) {
            console.log(isLogin)
            return (
                <div>
                    < Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                        <SubMenu key="user" title="用户管理">
                            <Menu.Item key="1">

                                <Link to="/userlist"><span className="nav-text">用户成员信息</span></Link>
                            </Menu.Item>
                            <Menu.Item key="2">

                                <span className="nav-text">用户行为日志</span>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key='assets' title="资产管理">


                        </SubMenu>
                    </Menu>
                </div>)
        } else {
            return (<div></div>)
        }

    }
    return (
        <div className="left-content">

            <div className="mp_sb_icon">
                <Link to="/index"><div>Welcome!</div></Link>
            </div>
            {generateSiderBar()}

        </div>
    )
}

export default SiderBar;
