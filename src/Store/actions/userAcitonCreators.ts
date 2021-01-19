import { UserActionTypes } from "./actionTypes";



const createUserLoginWithSSO = (token: string) => ({
    type: UserActionTypes.USER_LOGIN_WITH_SSO, payload: {
        token
    }
})
const createUserLogin = (user: string) => ({
    type: UserActionTypes.USER_LOGIN_SUCCESS,
    payload: {
        userName: user
    }
})
const createUserClean = () => ({ type: UserActionTypes.USER_CLEAN })

export {
    createUserLoginWithSSO,
    createUserLogin,
    createUserClean,

}