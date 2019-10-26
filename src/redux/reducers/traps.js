import ACTIONS_TYPES from '../action_types'
const initialState = {
  traps: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS_TYPES.GET_TRAPS_RECEIVED:
            return {
              traps: [...state.traps, ...payload.traps]
            }
    default:
      return state
  }
}
