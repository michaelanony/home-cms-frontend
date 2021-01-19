// import { actions } from "./../../store/actions/index";
// import { BoardXRequestResult, BaseDoc } from "./../../types/type";
import store from "../Store";
import { createUserClean } from "../Store/actions/userAcitonCreators";
import axios from "axios";

const my_axios = axios;
my_axios.defaults.withCredentials = true;
my_axios.interceptors.request.use(config => {
    if (localStorage.getItem('ac-token')) {
        config.headers.common['ac-token'] = localStorage.getItem('ac-token')
    }
    return config;
}, error => {
    return Promise.reject(error)
})
my_axios.interceptors.response.use(response => {
    if (response.data.code === 401) {
        store.dispatch(createUserClean())
    }
    return response
}, error => {
    return Promise.reject(error);
})
// my_axios.interceptors.response.use(
//   (res: AxiosResponse<BoardXRequestResult<BaseDoc>>) => {
//     console.log("[axios.interceptors]", res);
//     if (res.data.code === 401) {
//       store.dispatch(actions.apiResponseUnauthorized());
//     }
//     return res;
//   },
//   function(error) {
//     console.log("[axios.interceptors error]", error);
//     return Promise.reject(error);
//   }
// );

export default my_axios;
