import { 
    CREATE_USER, 
    UPDATE_USER, 
    RETRIEVE_USERS,
    DELETE_USER,
    CREATE_CARE_MEMBER
 } from "actions/types/user";
import { user_initialState } from '../initialStates/user';


const userReducer = (users = user_initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_USER:
            console.log(payload)
            return [...users, payload];

        case CREATE_CARE_MEMBER:
            return [...users, payload];

        case RETRIEVE_USERS:
            return payload;
           
        case UPDATE_USER:
            return users.map(user => {
                if(user.id === payload.id){
                    return {
                        ...user,
                        ...payload
                    };
                } else {
                    return user
                }
            });

        case DELETE_USER:
            return users.filter(({ id }) => id !== payload.id);

        default:
            return users;
    }
}

export default userReducer