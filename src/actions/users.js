import {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  RETRIEVE_USERS,
  CREATE_CARE_MEMBER,
} from './types/user'
import { user_initialState } from '../initialStates/user'
import UserService from '../services/UserService'
import { toast } from 'react-toastify';

export const createUser = (data) => {
  console.log(data)
  return { type: CREATE_USER, payload: data }
}

export const createCareMember = (data) => async (dispatch) => {

  console.log(data)
  
  const { onBoardDate, offBoardDate, employee, role, country } = data

  try {
    const res = await UserService.create({
      onBoardDate,
      offBoardDate,
      employee,
      role,
      country,
    })
    dispatch({ type: CREATE_CARE_MEMBER, payload: res.data })

    if(res.status === 201){
      toast.success("Care Member Created Successfully")
    }

    console.log(res)

    return Promise.resolve(res.data)
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
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
