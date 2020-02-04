import {
    createAction,
    ActionOfType,
    ActionsUnion
} from "../redux-util/redux-util";
import { ActionType } from "./actionTypes"
import { apiCheckLogin } from "../../Api/services"

const userSigninWithSSOSuccess = (code: string) =>
    createAction(ActionType.USER_SIGNIN_WITH_SSO_SUCCESS, { code });
const userLoginSuccess = () => createAction(ActionType.USER_LOGIN_SUCCESS);
const apiResponseUnauthorized = () =>
    createAction(ActionType.API_RESPONSE_UNAUTHORIZED);



export const actions = {
    userSigninWithSSOSuccess,
    userLoginSuccess,
    apiResponseUnauthorized,
};

export type Actions = ActionsUnion<typeof actions>;

export type Action<T extends ActionType> = ActionOfType<Actions, T>;
