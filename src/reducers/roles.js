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
            return;

        case EDIT_ROLE:
            return;

        case RETRIEVE_ROLES:
            return payload;
            
        default:
            return roles;
    }
}

export default roleReducer