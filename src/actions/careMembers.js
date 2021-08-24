import {
  CREATE_CARE_MEMBER,
} from './types'

import careMemberService from '../services/careMemberService'
import { toast } from 'react-toastify';


export const createCareMember = (data) => async (dispatch) => {

  console.log(data)
  
  const { country, employee, offBoardDate, onBoardDate, role } = data

  try {
    const res = await careMemberService.create({
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

