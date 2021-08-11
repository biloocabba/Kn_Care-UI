import {
  RETRIEVE_USERS,
  CREATE_CARE_MEMBER,
} from './types/user'
import UserService from '../services/UserService'
import { toast } from 'react-toastify';

export const createCareMember = (data) => async (dispatch) => {

  const { country, employee, offBoardDate, onBoardDate, role } = data

  try {
    const res = await UserService.create({
     country,
     employee,
     offBoardDate,
     onBoardDate,
     role
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