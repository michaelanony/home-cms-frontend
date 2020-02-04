import { Actions } from "../actions/actionCreators";
import { ActionType } from "../actions/actionTypes"

type State = {
    userName: string;
};

const initialState: State = {
    userName: "",
};

export default (state = initialState, user: string): State => {

    return state;


};
