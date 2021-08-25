import { combineReducers } from "redux";
import employeesReducer from "./employees.js";
import careMembersReducer from './careMembers.js';
import groupsReducer from './groups.js';
import mapKpisReducer from './mapKpis.js';
import authReducer from "./auth";
import messageReducer from "./message";

export const rootReducer = combineReducers({
    employees: employeesReducer,
    careMembers: careMembersReducer,
    groups:groupsReducer,
    mapKpis: mapKpisReducer,
    message: messageReducer,
    auth: authReducer,
  });