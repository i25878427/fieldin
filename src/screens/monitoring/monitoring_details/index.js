import React from 'react'
import { Alert } from 'react-native'
import moment from 'moment'
import MonitoringDetailsListItem from './monitoring_details_list_item'
import CONSTANTS from '../../../constants'

const createAlert = (name, date, type) => {
    let title = null
    let message = null
    switch (type) {
        case CONSTANTS.BLOCKS:
            message = `${name} was monitored in the last 72 hours`
            break
        case CONSTANTS.TRAPS:
            title = 'Last Visit'
            message = `${name} was last visited ${moment(date).fromNow()}`
            break
    }
    if (message) {
        Alert.alert(
            title,
            message,
            [
                { text: 'OK' },
            ]
        )
    }
}

export default MonitoringDetails = (props) => <MonitoringDetailsListItem {...props} onPress={createAlert} />
