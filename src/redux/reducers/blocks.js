import ACTIONS_TYPES from '../action_types'
import {mergeObjectsArrayById} from '../../helpers/arrays'
const initialState = {
    blocks: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTIONS_TYPES.GET_BLOCKS_RECEIVED:
            return {
                blocks: [...state.blocks, ...mergeObjectsArrayById(payload.blocks, payload.blocksMonitor, 'id', 'block_id')]
            }
        default:
            return state
    }
}
