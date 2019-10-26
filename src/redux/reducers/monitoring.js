import ACTIONS_TYPES from '../action_types'
import {mergeObjectsArrayById} from '../../helpers/arrays'

const initialState = {
    traps: [],
    trapsLoading: true,
    blocks: [],
    blocksLoading: true
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTIONS_TYPES.GET_TRAPS_RECEIVED:
            debugger
            return {
                ...state,
                traps: [...state.traps, ...payload.traps],
                trapsLoading: false
            }
        case ACTIONS_TYPES.GET_BLOCKS_RECEIVED:
            return {
                ...state,
                blocks: [...state.blocks, ...mergeObjectsArrayById(payload.blocks, payload.blocksMonitor, 'id', 'block_id')],
                blocksLoading: false
            }
        default:
            return state
    }
}
