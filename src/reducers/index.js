import { combineReducers } from "redux";
import groups from "./groups";
import bestPractice from "./bestPractices";
import pageStatus from "./pageStatus";

export default combineReducers({
  groups,
  bestPractice,
  pageStatus
});
