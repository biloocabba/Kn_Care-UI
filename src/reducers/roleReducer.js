import { CREATE_ROLE, 
    DEACTIVATE_ROLE, 
    EDIT_ROLE,
     } from "actions/types/role";

const initialState = [];

export const roleReducer = (roles = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_ROLE:
            return;

        case DEACTIVATE_ROLE:
            return;

        case EDIT_ROLE:
            return;
            
        default:
            return roles;
    }
}