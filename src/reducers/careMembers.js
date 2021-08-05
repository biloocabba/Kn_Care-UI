import { 
    CREATE_CARE_MEMBER,
    RETRIEVE_CARE_MEMBERS,
    UPDATE_CARE_USER,
    OFFBOARD_CARE_USER
 } from "actions/types/user";
import { careMember_initialState } from '../initialStates/careMember';


const userReducer = (careMembers = careMember_initialState, action) => {
    const { type, payload } = action;

    switch (type) {
      
        case CREATE_CARE_MEMBER:
            return [...careMembers, payload];

        case RETRIEVE_CARE_MEMBERS:
            return payload;
           
        case UPDATE_CARE_USER:
            return careMembers.map(user => {
                if(user.id === payload.id){
                    return {
                        ...user,
                        ...payload
                    };
                } else {
                    return user
                }
            });

        case OFFBOARD_CARE_USER:
            return careMembers.filter(({ id }) => id !== payload.id);

        default:
            return careMembers;
    }
}

export default userReducer