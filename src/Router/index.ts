import Home from '../Pages/MainPage/MainPage'
import UserList from '../Pages/UserList/UserList';
import MineCenter from '../Pages/MineCenter/MineCenter';

let routes = [
    { path: '/', component: Home, exact: false },
    { path: '/userlist', component: UserList },
    { path: '/usercenter', component: MineCenter }
]

export default routes;