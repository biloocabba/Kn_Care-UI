import { RETERIEVE_BEST_PRACTICES } from './types/bestPractice';
import bestPractices from '../services/bestPracticeService';

export const reterieveBestPractices = () => async (dispatch) => {

    try {
      const res = await bestPractices.getAll()
      console.log(res)
      dispatch({ type: RETERIEVE_BEST_PRACTICES, payload: res.data })
    } catch (error) {
      console.log(error)
    }
  }
  