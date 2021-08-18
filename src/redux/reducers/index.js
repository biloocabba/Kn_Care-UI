import { combineReducers } from "redux";
import bestPractices from "./bestPractices";
import pageStatus from "./pageStatus"

export default combineReducers({
    bestPractices,
    pageStatus
});