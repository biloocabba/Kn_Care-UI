import { 
    CREATE_CARE_MEMBER,
    RETRIEVE_CARE_MEMBERS,
    UPDATE_CARE_MEMBER,
    OFFBOARD_CARE_MEMBER
 } from "actions/types";

const careMemberReducer = (careMembers = [], action) => {
    const { type, payload } = action;

    switch (type) {
      
        case CREATE_CARE_MEMBER:
            return [...careMembers, payload];

        case RETRIEVE_CARE_MEMBERS:
            return payload;
           
        case UPDATE_CARE_MEMBER:
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

        case OFFBOARD_CARE_MEMBER:
            return careMembers.filter(({ id }) => id !== payload.id);

        default:
            return careMembers;
    }
}

export default careMemberReducer