import { 
    RETRIEVE_USERS } from "actions/types/user";
import { user_initialState } from '../initialStates/user';


const userReducer = (users = user_initialState, action) => {
    const { type, payload } = action;

    switch (type) {
       
        case RETRIEVE_USERS:
            return payload;
       
        default:
            return users;
    }
}

export default userReducer