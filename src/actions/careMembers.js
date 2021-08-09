import {
    RETRIEVE_CARE_MEMBERS,
  } from "./types/careMember";
import careMembersDataService from "../services/careMembersService";

export const retrieveCareMembers = () => async (dispatch) => {
    try {
      const res = await careMembersDataService.getAllCareMembers();
  
      dispatch({
        type: RETRIEVE_CARE_MEMBERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
};

export const findCareMembersByInternationalName = (internationalName) => async (dispatch) => {
    try {
      const res = await careMembersDataService.findByInternationalName(internationalName);
  
      dispatch({
        type: RETRIEVE_CARE_MEMBERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
};

export const findCareMembersByBusinessUnit = (businessUnit) => async (dispatch) => {
    try {
      const res = await careMembersDataService.findByBusinessUnit(businessUnit);
  
      dispatch({
        type: RETRIEVE_CARE_MEMBERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
};

export const findCareMembersByCostCenter = (costCenter) => async (dispatch) => {
    try {
      const res = await careMembersDataService.findByCostCenter(costCenter);
  
      dispatch({
        type: RETRIEVE_CARE_MEMBERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
};

export const findCareMembersByCountry = (country) => async (dispatch) => {
    try {
      const res = await careMembersDataService.findByCountry(country);
  
      dispatch({
        type: RETRIEVE_CARE_MEMBERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
};