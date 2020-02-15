import axios from "./myaxios";
import { LoginResult, UserList, CityListResult } from "../Types/Types"
import { AxiosResponse } from "axios";
const REACT_APP_API_HOST = "http://cms.back"

/**
 * ==========================User==========================
 */
export const apiUserLogin = async (username: string, password: string): Promise<LoginResult> => {
    return axios({
        url: REACT_APP_API_HOST + `/api/user/login`,
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: { "u_name": username, "u_password": password },
        transformRequest: [function (data) {
            // Do whatever you want to transform the data
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
    }).then(res => {
        return res.data;
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

export const apiCheckLogin = async (): Promise<LoginResult> => {
    return axios({
        url: REACT_APP_API_HOST + `/api/user/current`,
        method: "GET",
    }).then(res => {
        return res.data
    })
}
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