import {
    CREATE_ROLE,
    DEACTIVATE_ROLE,
    EDIT_ROLE, RETRIEVE_ROLES,
} from "actions/types/index.js";

const initialState = [];

const roleReducer = (roles = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_ROLE:
            return [...roles, payload];

        case DEACTIVATE_ROLE:
            return roles.map((role) => {
                if (role.id === payload.id) {
                    return {
                        ...role,
                        active: !role.active,
                    };
                } else {
                    return role;
                }});

        case EDIT_ROLE:
            return roles.map(role => {
                if(role.id === payload.id){
                    return {
                        ...role,
                        ...payload
                    };
                } else {
                    return role
                }
            });


        case RETRIEVE_ROLES:
            return payload;
            
        default:
            return roles;
    }
}

export default roleReducer