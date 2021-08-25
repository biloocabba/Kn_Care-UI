import { combineReducers } from "redux";
import employeesReducer from "./employees.js";
import careMembersReducer from './careMembers.js';
import groupsReducer from './groups.js';
import emailDraftReducer from "./emailDrafts.js";


export const rootReducer = combineReducers({
    employees: employeesReducer,
    careMembers: careMembersReducer,
    groups:groupsReducer,
    emailDrafts: emailDraftReducer
  }
);