import { actions, Action } from "../actions/actionCreators";
import { createBrowserHistory } from "history";
import { LoginResult } from "../../Types/Types";
import { call } from "redux-saga/effects";
import { apiUserLogin } from "../../Api/services";
import { ActionType } from "../actions/actionTypes";
import { takeEvery, put } from "../redux-util/saga-action-util";

export default function* saga() {
    yield takeEvery(
        ActionType.USER_SIGNIN_WITH_SSO_SUCCESS,
        on_userSigninWithSSOSuccess
    );
}

function* on_userSigninWithSSOSuccess(
    action: Action<ActionType.USER_SIGNIN_WITH_SSO_SUCCESS>
) {
    // const result: LoginResult = yield call(apiUserLogin, action.payload.code);
    // if (result.code === 200) {
    //     const history = createBrowserHistory();
    //     history.push("/cicd/pipelines/");
    //     yield put(actions.userLoginSuccess());
    // } else {
    //     window.location.href =
    //         "https://github.corp.ebay.com/login/oauth/authorize?client_id=1a06892cfd154d5d8f0e&scope=read:org,user:email,repo";
    // }
}
