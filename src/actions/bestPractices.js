import { RETERIEVE_BEST_PRACTICES } from './types/bestPractice';
import bestPracticeService from '../services/BestPracticeService';

export const reterieveBestPractices = () => async (dispatch) => {

    try {
      const res = await bestPracticeService.getAll()
      console.log(res)
      dispatch({ type: RETERIEVE_BEST_PRACTICES, payload: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  export const searchBestPractices = (searchFilters) => async (dispatch) => {
    try {
      // convert object to a query string
      const queryParams = new URLSearchParams(searchFilters);

      const res = await bestPracticeService.search(queryParams)

      console.log(res)
      dispatch({ type: RETERIEVE_BEST_PRACTICES, payload: res.data })
    } catch (error) {
      console.log(error)
    }
  }



  