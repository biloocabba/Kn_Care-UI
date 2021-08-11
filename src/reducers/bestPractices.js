import { bestPractice_InitialState } from '../initialStates/bestPractice'
import { RETERIEVE_BEST_PRACTICES } from '../actions/types/bestPractice'

const bestPracticeReducer = (bestpractices = bestPractice_InitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case RETERIEVE_BEST_PRACTICES:
      return payload;

    default:
      return bestpractices
  }
}

export default bestPracticeReducer
