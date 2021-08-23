import { combineReducers } from "redux";
import employeesReducer from "./employees.js";
import careMembersReducer from './careMembers.js';
import groupsReducer from './groups.js';
import bestPracticesReducer from "./bestPractices.js";
import pageStatusReducer from "./pageStatus.js";


export const rootReducer = combineReducers({
    employees: employeesReducer,
    careMembers: careMembersReducer,
    groups:groupsReducer,
    bestPractices:bestPracticesReducer,
    pageStatus:pageStatusReducer
  });