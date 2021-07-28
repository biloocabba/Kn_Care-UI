import { CREATE_GROUP, 
    DEACTIVATE_GROUP, 
    ADD_CAREMEMBER_TO_GROUP,
    REMOVE_CAREMEMBER_FROM_GROUP, 
    SEARCH_GROUP
     } from "actions/types/group";

const initialState = [];

export const groupReducer = (groups = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_GROUP:
            return;

        case DEACTIVATE_GROUP:
            return;

        case ADD_CAREMEMBER_TO_GROUP:
            return;

        case REMOVE_CAREMEMBER_FROM_GROUP:
            return;

        case SEARCH_GROUP:
            return;
    
        default:
            return groups;
    }
}