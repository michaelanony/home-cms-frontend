// import { actions } from "./../../store/actions/index";
// import { BoardXRequestResult, BaseDoc } from "./../../types/type";
// import store from "../../store";

import axios, { AxiosResponse } from "axios";
const my_axios = axios;

my_axios.defaults.withCredentials = true;

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
