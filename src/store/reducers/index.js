import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import sidebarReducer from "./sidebarReducer";
import roleReducer from "./roleReducer";
import tenderReducer from "./tenderReducer";
import consumerReducer from "./consumerReducer";
import loginReducer from "./loginReducer";
import billReducer from "./billReducer";
import masterReducer from "./masterReducer";
import tarriffReducer from "./tarriffReducer";
import reportReducer from "./reportReducer";
const rootReducer=combineReducers({
    posts:postReducer,
    users:userReducer,
    sidebar:sidebarReducer,
    roles:roleReducer,
    tenders:tenderReducer,
    consumers:consumerReducer,
    tarriffs:tarriffReducer,
    auth:loginReducer,
    bills:billReducer,
    masters:masterReducer,
    reports:reportReducer
});

export default rootReducer;
