import {
    RETRIEVE_CARE_MEMBERS,
  } from "./types/careMember";
import careMembersService from "../services/careMembersService";

export const searchCareMembers = (filters) => async (dispatch) => {
  try {
    const res = await careMembersService.searchCareMembers(filters);

    dispatch({
      type: RETRIEVE_CARE_MEMBERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
/*
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

export const findCareMembersByCompanyCode = (companyCode) => async (dispatch) => {
    try {
      const res = await careMembersDataService.findByCompanyCode(companyCode);
  
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

export const findCareMembersByOnBoardDate = (onBoardDate) => async (dispatch) => {
  try {
    const res = await careMembersDataService.findByOnBoardDate(onBoardDate);

    dispatch({
      type: RETRIEVE_CARE_MEMBERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
  */
};