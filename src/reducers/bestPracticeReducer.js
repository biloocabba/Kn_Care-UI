import { CREATE_BEST_PRACTICE, 
    ADD_ATTACHMENT_TO_BEST_PRACTICE, 
    DELETE_ATTACHMENT_FROM_BEST_PRACTICE,
    DELETE_BEST_PRACTICE, 
    SEARCH_BEST_PRACTICE,
    RATE_BEST_PRACTICE,
    TAG_BEST_PRACTICE,
    SHARE_BEST_PRACTICE
     } from "actions/types/bestPractice";

const initialState = [];

export const bestPracticeReducer = (bestPractices = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_BEST_PRACTICE:
            return;

        case ADD_ATTACHMENT_TO_BEST_PRACTICE:
            return;

        case DELETE_ATTACHMENT_FROM_BEST_PRACTICE:
            return;

        case DELETE_BEST_PRACTICE:
            return;

        case SEARCH_BEST_PRACTICE:
            return;
        case RATE_BEST_PRACTICE:
            return;

        case TAG_BEST_PRACTICE:
            return;

        case SHARE_BEST_PRACTICE:
            return;

        default:
            return bestPractices;
    }
}