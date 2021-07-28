import { combineReducers } from "redux";
import users from "./userReducer";
import groups from "./groupReducer"
import bestPractices from "./bestPracticeReducer";
import roles from "./roleReducer";
import trainings from './trainingsReducer';

export const rootReducer = combineReducers({
    users: users,
    groups: groups,
    bestPractices: bestPractices,
    roles: roles,
    trainings: trainings
  });
  