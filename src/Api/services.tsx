import axios from "./myaxios";
import { LoginResult, UserList, CityListResult, UserResp } from "../Types/Types"
import { AxiosResponse } from "axios";
const REACT_APP_API_HOST = "http://127.0.0.1:4000"

/**
 * ==========================User==========================
 */
export const apiUserLogin = async (username: string, password: string): Promise<UserResp> => {
    return axios({
        url: REACT_APP_API_HOST + `/v1/user/login`,
        method: "POST",
        data: {
            user: username,
            pwd: password,
        },
    }).then(res => {
        return res.data
    })
}
export const apiGetAllUsers = async (): Promise<UserList> => {
    return axios({
        url: REACT_APP_API_HOST + `/api/user/alluser`,
        method: "GET",
    }).then(res => {
        return res.data
    })
}
export const apiCheckLogin = async (token: string): Promise<UserResp> => {
    return axios({
        url: REACT_APP_API_HOST + `/v1/user/check?token=` + token,
        method: "GET",
    }).then(res => {
        return res.data
    })
}
// export const apiCheckLogin = async (): Promise<LoginResult> => {
//     return axios({
//         url: REACT_APP_API_HOST + `/api/user/current`,
//         method: "GET",
//     }).then(res => {
//         return res.data
//     })
// }
/**
 * ==========================FY==========================
 */

export const apiGetAllCities = async (): Promise<CityListResult> => {
    return axios({
        url: REACT_APP_API_HOST + `/fy/citylist`,
        method: "GET"
    }).then(res => {
        return res.data
    })
}
/**
 * ==========================TEST==========================
 */
export const apiCookie = async (): Promise<AxiosResponse> => {
    return axios({
        url: REACT_APP_API_HOST + `/api/user/cookie`,
        method: "GET"
    }).then(res => {
        return res.data
    })
}
