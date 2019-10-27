import { put, takeLatest } from 'redux-saga/effects';
import ACTIONS_TYPES from '../../redux/action_types'
import { getTraps, getBlocks } from './monitoring_saga'
import trapsData from '../../mock_data/traps.json'
import blocksData from '../../mock_data/blocks.json'
import blocksMonitorData from '../../mock_data/blocks_monitor.json'

describe('Testing monitoring saga', () => {
    const traps = trapsData
    const blocks = blocksData
    const blocksMonitor = blocksMonitorData
    it('creates an action to get traps', () => {
        const generator = getTraps();
        generator.next();
        expect(generator.next(traps).value)
            .toEqual(put({
                type: ACTIONS_TYPES.GET_TRAPS_RECEIVED,
                payload: {
                    traps
                }
            }
            ))
        expect(generator.next().done).toBeTruthy();
    })

    it('creates an action to get blocks', () => {
        const generator = getBlocks();
        generator.next();
        expect(generator.next([blocks, blocksMonitor]).value)
            .toEqual(put({
                type: ACTIONS_TYPES.GET_BLOCKS_RECEIVED,
                payload: {
                    blocks,
                    blocksMonitor
                }
            }
            ))
        expect(generator.next().done).toBeTruthy();
    })
})