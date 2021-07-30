import { ONBOARD_EMPLOYEES, 
    OFFBOARD_CARE_USER, 
    RESIGN_CARE_USER,
     LOGIN_CARE_USER, 
     LOGOUT_CARE_USER, 
     RETRIEVE_EMPLOYEES, 
     RETRIEVE_CARE_MEMBERS,
     SEARCH_CARE_USER } from "actions/types/user";
import { user_initialState } from '../initialSates/user';


const userReducer = (users = user_initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ONBOARD_EMPLOYEES:
            return;

        case OFFBOARD_CARE_USER:
            return;

        case RESIGN_CARE_USER:
            return;

        case LOGIN_CARE_USER:
            return;

        case LOGOUT_CARE_USER:
            return;

        case RETRIEVE_EMPLOYEES:
            return;

        case RETRIEVE_CARE_MEMBERS:
            return;

        case SEARCH_CARE_USER:
            return;
    
        default:
            return users;
    }
}

export default userReducer