import { combineReducers } from "redux";
import employeesReducer from "./employees.js";
import careMembersReducer from './careMembers.js';
import groupsReducer from './groups.js';
import roleReducer from "./roles";


export const rootReducer = combineReducers({
    employees: employeesReducer,
    careMembers: careMembersReducer,
    groups:groupsReducer,
    roles:roleReducer
  });