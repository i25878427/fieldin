import monitoringReducer from './monitoring'
import {initialState} from './monitoring'
import ACTIONS_TYPES from '../action_types'
import trapsData from '../../mock_data/traps.json'
import blocksData from '../../mock_data/blocks.json'
import blocksMonitorData from '../../mock_data/blocks_monitor.json'

describe('monitoringReducer', () => {
    describe('when initalizing', () => {
        const traps = trapsData
        const blocks = blocksData
        const blocksMonitor = blocksMonitorData
        it('set a initialState', () => {
            expect(monitoringReducer(undefined, { type: undefined, initialState })).toEqual(initialState)
        })
        it('get traps', () => {
            expect(monitoringReducer(initialState, { type: ACTIONS_TYPES.GET_TRAPS_RECEIVED, payload: { traps } })).toEqual(
                {
                    ...initialState,
                    traps: [...initialState.traps, ...traps],
                    trapsLoading: false
                }
            )
        })
        it('get blocks', () => {
            expect(monitoringReducer(initialState, { type: ACTIONS_TYPES.GET_BLOCKS_RECEIVED, payload: { blocks, blocksMonitor } })).toEqual(
                {
                    ...initialState,
                    blocks: [...initialState.blocks, ...blocks],
                    blocksLoading: false
                }
            )
        })
    })
})