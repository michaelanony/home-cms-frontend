import { UserActionTypes } from "../actions/actionTypes";

export interface UserState {
    userName: string,
    isLogin: boolean,
    status: number
}
interface UserAction {
    type: string,
    payload: UserState
}
const initialState: UserState = {
    userName: "",
    isLogin: false,
    status: 0
}


export default function userReducer(state = initialState, action: UserAction): UserState {
    console.log(action)
    switch (action.type) {
        case UserActionTypes.USER_LOGIN_WITH_SSO:
            return Object.assign({}, state, action)
        case UserActionTypes.USER_LOGIN_SUCCESS:
            return {
                status: 0,
                userName: action.payload.userName,
                isLogin: true
            }

        case UserActionTypes.USER_LOGOUT:
            return {
                ...state,
                userName: "",
                isLogin: false
            }
        case UserActionTypes.USER_LOGIN_FAILED:
            return {
                ...state,
                status: 1
            }

        default:
            return state
    }
}