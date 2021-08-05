import { combineReducers } from "redux";
import users from "./users";
import careMembers from './careMembers';

export const rootReducer = combineReducers({
    users: users,
    careMembers: careMembers,
  });