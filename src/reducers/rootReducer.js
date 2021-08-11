import { combineReducers } from "redux";
import employeesReducer from "./employees.js";
import careMembers from './careMembers.js';

export const rootReducer = combineReducers({
    employees: employeesReducer,
    careMembers: careMembers,
  });