import { call, select, put, takeEvery } from "redux-saga/effects"
import { UserActionTypes } from "../actions/actionTypes"
import { apiCheckLogin } from "../../Api/services";
import { UserResp } from "../../Types/Types"
export function* loginSaga() {
    yield takeEvery(UserActionTypes.USER_LOGIN_WITH_SSO, function* () {
        const token = yield select(state => state.userReducer.payload.token)
        const res: UserResp = yield call(apiCheckLogin, token)
        if (res.code === 200 && res.data) {
            yield put({
                type: UserActionTypes.USER_LOGIN_SUCCESS,
                payload: {
                    userName: res.data.user
                }
            })
        } else {
            localStorage.removeItem('ac-token')
            window.location.href = "/login"
        }
    })
    yield takeEvery(UserActionTypes.USER_CLEAN, function* () {
        localStorage.removeItem('ac-token')
        yield put({
            type: UserActionTypes.USER_LOGOUT
        })
    })
}