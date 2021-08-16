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

  export const findBestPracticesByTime = (time) => async (dispatch) => {
    try {
      const res = await bestPracticeService.findByTime(time)
      console.log(res)
      dispatch({ type: RETERIEVE_BEST_PRACTICES, payload: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  export const findBestPracticesByAuthor = (author) => async (dispatch) => {
    try {
      const res = await bestPracticeService.findByAuthor(author)
      console.log(res)
      dispatch({ type: RETERIEVE_BEST_PRACTICES, payload: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  export const findBestPracticesByTag = (tag) => async (dispatch) => {
    try {
      const res = await bestPracticeService.findByTag(tag)
      console.log(res)
      dispatch({ type: RETERIEVE_BEST_PRACTICES, payload: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  export const findBestPracticesByRate = (rate) => async (dispatch) => {
    try {
      const res = await bestPracticeService.findByRate(rate)
      console.log(res)
      dispatch({ type: RETERIEVE_BEST_PRACTICES, payload: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  export const findBestPracticesByTitle = (title) => async (dispatch) => {
    try {
      const res = await bestPracticeService.findByTitle(title)
      console.log(res)
      dispatch({ type: RETERIEVE_BEST_PRACTICES, payload: res.data })
    } catch (error) {
      console.log(error)
    }
  }



  