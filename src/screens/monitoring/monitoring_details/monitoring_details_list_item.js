import React from 'react'
import { View, Text, Image } from 'react-native'
import { compose, branch, withProps } from 'recompose'
import CONSTANTS from '../../../constants'
import { hoursPassedUntilNow } from '../../../helpers/dates'
import withFlatlist from '../../../hoc/with_flatlist'
import withButton from '../../../hoc/with_button'
import styles from './monitoring_details_list_item_styles'

const MonitoringDetailsListItem = ({ name, shouldOpenModal, scouting_date, iconSource }) => {
    return (
        <View style={styles.itemContainer}>
            <Text>{name}</Text>
            {
                (
                    (shouldOpenModal)
                    ||
                    (scouting_date && hoursPassedUntilNow(scouting_date) < 72)
                )
                && <Image source={iconSource} />}
        </View>
    )
}

const enhance = compose(
    withFlatlist,
    withProps(props => {
        let date  = props.update_date
        if(props.type === CONSTANTS.BLOCKS) {
            date  = props.scouting_date
        }
        return {
            onPress: () => props.onPress(props.name, date, props.type)
        }
    }),
    branch(
        (props) => (props && props.shouldOpenModal) || (props.scouting_date && hoursPassedUntilNow(props.scouting_date) < 72),
        withButton
    )
)

export default enhance(MonitoringDetailsListItem)
