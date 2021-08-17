import {
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  RETRIEVE_EMPLOYEES
} from './types'

import employeeService from '../services/employeeService'

export const createUser = (data) => {
  console.log(data)
  return { type: CREATE_EMPLOYEE, payload: data }
}

export const retrieveEmployees = () => async (dispatch) => {
  try {
    const res = await employeeService.getAll()
    dispatch({ type: RETRIEVE_EMPLOYEES, payload: res.data })
  } catch (error) {
    console.log(error)
  }
}

export const findEmployeesByInternationalName = (internationalName) => async (dispatch) => {
  try {
    const res = await employeeService.findByInternationalName(internationalName);

    dispatch({
      type: RETRIEVE_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findEmployeesByBusinessUnit = (businessUnit) => async (dispatch) => {
  try {
    const res = await employeeService.findByBusinessUnit(businessUnit);

    dispatch({
      type: RETRIEVE_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findEmployeesByCompanyCode = (companyCode) => async (dispatch) => {
  try {
    const res = await employeeService.findByCompanyCode(companyCode);

    dispatch({
      type: RETRIEVE_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findEmployeesByCountry = (country) => async (dispatch) => {
  try {
    const res = await employeeService.findByCountry(country);

    dispatch({
      type: RETRIEVE_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findEmployeesByHiringDate = (hiringDate) => async (dispatch) => {
  try {
    const res = await employeeService.findByHiringDate(hiringDate);

    dispatch({
      type: RETRIEVE_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (id, data) => {
  return { type: UPDATE_EMPLOYEE, payload: id, data }
}

export const deleteUser = (id) => {
  return { type: DELETE_EMPLOYEE, payload: { id } }
}
