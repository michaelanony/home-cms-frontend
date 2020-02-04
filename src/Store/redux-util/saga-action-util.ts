import { Action } from "../actions/actionCreators";
import { ActionType } from "../actions/actionTypes"
import {
    takeEvery as saga_takeEvery,
    put as saga_put
} from "redux-saga/effects";

export function takeEvery<T extends ActionType, F>(
    actionType: T,
    handler: (action: Action<T>) => F
) {
    return saga_takeEvery(actionType, handler);
}

export function put<T extends ActionType>(action: Action<T>) {
    return saga_put(action);
}
