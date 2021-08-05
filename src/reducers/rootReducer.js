import { combineReducers } from "redux";
import users from "./users";
import groups from "./groups"
import bestPractices from "./bestPractices";
import roles from "./roles";
import trainings from './trainings';

export const rootReducer = combineReducers({
    users: users,
    groups: groups,
    bestPractices: bestPractices,
    roles: roles,
    trainings: trainings
  });
  