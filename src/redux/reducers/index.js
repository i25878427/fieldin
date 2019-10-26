import { combineReducers } from 'redux'
import traps from './traps'
import blocks from './blocks'

const appReducer = combineReducers({
    traps,
    blocks
})





export default appReducer
