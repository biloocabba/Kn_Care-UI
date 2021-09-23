import { combineReducers } from "redux";
import employeesReducer from "./employeeReducer.js";
import careMemberReducer from './careMemberReducer.js';
import groupReducer from './groupReducer.js';
import emailDraftReducer from "./emailDraftReducer.js";
import bestPracticeReducer from "./bestPracticeReducer.js";
import mapKpisReducer from './mapKpiReducer.js';
import authReducer from "./auth.js";
import messageReducer from "./messageReducer";
import categoryReducer from "./categoryReducer.js";


export const rootReducer = combineReducers({
    employees: employeesReducer,
    careMembers: careMemberReducer,
    groups:groupReducer,
    emailDrafts: emailDraftReducer,
    bestPractices:bestPracticeReducer,   
    mapKpis: mapKpisReducer,
    message: messageReducer,
    auth: authReducer,
    categories: categoryReducer
  });
