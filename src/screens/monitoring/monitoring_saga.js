import ACTIONS_TYPES from '../../redux/action_types'
import { put, takeEvery, all } from 'redux-saga/effects'
import blocksData from '../../mock_data/blocks.json'
import blocksMonitorData from '../../mock_data/blocks_monitor.json'
import trapsData from '../../mock_data/traps.json'

function* getBlocks(action) {

    const [blocks, blocksMonitor] = yield all([
        fakeData(blocksData),
        fakeData(blocksMonitorData)
      ])

    yield put({
        type: ACTIONS_TYPES.GET_BLOCKS_RECEIVED,
        payload: {
            blocks,
            blocksMonitor
        }
    })
}

function* getTraps(action) {
    const traps = yield fakeData(trapsData)
    yield put({
        type: ACTIONS_TYPES.GET_TRAPS_RECEIVED,
        payload: {
            traps
        }
    })
}


export const monitoringSaga = [
    takeEvery(ACTIONS_TYPES.GET_BLOCKS, getBlocks),
    takeEvery(ACTIONS_TYPES.GET_TRAPS, getTraps),
]



const fakeData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 0);
       
    })
} 