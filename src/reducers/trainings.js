import {
  ASSIGN_CARE_USER_TO_TRAININGS,
  CREATE_TRAINING,
  EDIT_TRAINING,
  DEACTIVATE_TRAINING,
  CREATE_TRAINING_TRAIL,
  ADD_TRAINING_TO_TRAIL,
  REMOVE_TRAINING_FROM_TRAIL,
} from 'actions/types/training'

const initialState = []

const trainingReducer = (trainings = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ASSIGN_CARE_USER_TO_TRAININGS:
      return

    case CREATE_TRAINING:
      return

    case EDIT_TRAINING:
      return

    case DEACTIVATE_TRAINING:
      return

    case CREATE_TRAINING_TRAIL:
      
      return
    case ADD_TRAINING_TO_TRAIL:
      return

    case REMOVE_TRAINING_FROM_TRAIL:
      return
    default:
      return trainings
  }
}

export default trainingReducer;