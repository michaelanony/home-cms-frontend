/**
 * =========================User=========================
 */
export type LoginResult = {
    code: 200 | 400 | 500;
    msg: string;
    data: UserInfo;
}
export type UserDate = {
    user: UserInfo

}

export type UserInfo = {
    u_id: number,
    u_name: string,
    u_nickname: string,
    u_register_ip: string,
    u_admin: boolean,
    u_level: number,
    u_password: string,
    u_create_time: string,
    u_modify_time: string
}
export type UserList = {
    code: 200,
    data: UserInfo[]
}

/**
 * =========================FY=========================
 */

export type CityListResult = {
    code: 200 | 400,
    data: City[]
}

export type City = {
    id: number,
    city_name: string,
    city_py: string
}