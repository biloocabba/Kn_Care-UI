import {
    RETRIEVE_CARE_MEMBERS,
  } from "../actions/types/careMember";

const initialState = [];

function careMemberReducer(careMembers = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case RETRIEVE_CARE_MEMBERS:
        return payload;

      default:
        return careMembers;
    }
};
  
export default careMemberReducer;