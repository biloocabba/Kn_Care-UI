import { combineReducers } from "redux";
import users from "./users";
import careMembers from './careMembers';
import bestPractices from './bestPractices';

export const rootReducer = combineReducers({
    users: users,
    careMembers: careMembers,
    bestPractices: bestPractices
  });