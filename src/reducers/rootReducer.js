import { combineReducers } from "redux";
import employeesReducer from "./employees.js";
import careMembersReducer from './careMembers.js';
import groupsReducer from './groups.js';
import emailDraftReducer from "./emailDrafts.js";
import bestPracticesReducer from "./bestPractices.js";
import pageStatusReducer from "./pageStatus.js";
import mapKpisReducer from './mapKpis.js';
import authReducer from "./auth";
import messageReducer from "./message";
import roleReducer from "./roles";


export const rootReducer = combineReducers({
    employees: employeesReducer,
    careMembers: careMembersReducer,
    groups:groupsReducer,
    emailDrafts: emailDraftReducer,
    bestPractices:bestPracticesReducer,
    pageStatus:pageStatusReducer,
    mapKpis: mapKpisReducer,
    message: messageReducer,
    auth: authReducer,
    roles:roleReducer
  });
