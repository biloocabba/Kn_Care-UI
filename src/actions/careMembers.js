import {
    RETRIEVE_CARE_MEMBERS,
  } from "./types/careMember";
import careMembersService from "../services/careMembersService";

export const searchCareMembers = (filters) => async (dispatch) => {
  try {
    const queryParams = new URLSearchParams(filters);

    const res = await careMembersService.searchCareMembers(queryParams);

    console.log(res)

    dispatch({
      type: RETRIEVE_CARE_MEMBERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};