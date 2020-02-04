import { Actions } from "../actions/actionCreators";
import { ActionType } from "../actions/actionTypes"

type State = {
    isLogin: boolean;
};

const initialState: State = {
    isLogin: false,
};

export default (state = initialState, action: Actions): State => {
    switch (action.type) {
        case ActionType.USER_LOGIN_SUCCESS:
            return {
                isLogin: true

            };
        case ActionType.API_RESPONSE_UNAUTHORIZED:
            return {
                isLogin: false,
            };
        default:
            return state;
    }
};
