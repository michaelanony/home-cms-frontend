import { combineReducers } from "redux";
import user from "./user";
import loginStatus from "./loginStatus";

export default combineReducers({ user, loginStatus });
