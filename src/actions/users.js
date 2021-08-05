import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  RETRIEVE_USERS,
  CREATE_CARE_MEMBER,
} from './types/user'
import { user_initialState } from '../initialStates/user'
import UserService from '../services/UserService'

export const createUser = (data) => {
  console.log(data)
  return { type: CREATE_USER, payload: data }
}

export const createCareMember = (data) => async (dispatch) => {
  return { type: CREATE_CARE_MEMBER, payload: data }
}

export const reterieveEmployees = () => async (dispatch) => {
  try {

    const res = await UserService.getAll()
    dispatch({ type: RETRIEVE_USERS, payload: res.data })
    
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = (id, data) => {
  return { type: UPDATE_USER, payload: id, data }
}

export const deleteUser = (id) => {
  return { type: DELETE_USER, payload: { id } }
}
