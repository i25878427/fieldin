import { all } from 'redux-saga/effects';
import {monitoringSaga} from '../../screens/monitoring/monitoring_saga'

export default function* rootSaga() {
    yield all([
        ...monitoringSaga
    ])
}
