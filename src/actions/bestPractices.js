import { RETERIEVE_BEST_PRACTICES } from './types/bestPractice';
import BestPracticeService from '../services/BestPracticeService';

export const reterieveBestPractices = () => async (dispatch) => {

    try {
      const res = await BestPracticeService.getAll()
      console.log(res)
      dispatch({ type: RETERIEVE_BEST_PRACTICES, payload: res.data })
    } catch (error) {
      console.log(error)
    }
  }
  