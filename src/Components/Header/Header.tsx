import React, { ReactElement } from 'react'
import "./Header.scss";
import { useDispatch, useSelector } from 'react-redux';
import { createUserClean } from "../../Store/actions/userAcitonCreators";
import { Link } from 'react-router-dom';
const Header: React.FC = (): ReactElement => {
    const state = useSelector((state: any) => state.userReducer)
    const dispatch = useDispatch()
    const exitLogin = () => {
        dispatch(createUserClean())
    }
    if (state.isLogin) {
        return (
            <div className="header-title" >
                <div className="header-title-content">
                    <div className="header-title-content-user">
                        <span>欢迎:</span><span>{state.userName}</span>
                    </div>
                    <div className="header-title-content-logout">
                        <Link to="/usercenter" ><span >个人中心</span></Link>
                        <span onClick={exitLogin}>退出</span>
                    </div>
                </div>

            </div>
        )
    } else {
        return <div className="header-title" >
            <div className="header-notlogin">欢迎使用用户管理系统</div>
        </div>

    }
}

export default Header;
