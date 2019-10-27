import ACTIONS_TYPES from '../../redux/action_types'
import * as actions from './monitoring_action'

describe('Testing monitoring actions', () => {
    it('creates an action to get blocks', () => {
        const payload = {}
        const expectedAction = { type: ACTIONS_TYPES.GET_BLOCKS, payload }
        expect(actions.getBlocks(payload)).toEqual(expectedAction)
    })

    it('creates an action to get traps', () => {
        const payload = {}
        const expectedAction = { type: ACTIONS_TYPES.GET_TRAPS, payload }
        expect(actions.getTraps(payload)).toEqual(expectedAction)
    })
})

