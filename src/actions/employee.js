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

export const searchEmployees = (filters) => async (dispatch) => {
  try {
    const queryParams = new URLSearchParams(filters);

    const res = await employeeService.searchEmployees(queryParams);

    console.log(res)

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
