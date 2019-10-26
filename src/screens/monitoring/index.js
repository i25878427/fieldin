import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import CONSTANTS from '../../constants'
import Tabs from '../../components/tabs'
import Header from '../../components/header'
import MonitoringDetails from './monitoring_details'
import { getBlocks, getTraps } from './monitoring_action'
import styles from './styles'


class Monitoring extends Component {
    componentDidMount() {
        this.props.getBlocks()
        this.props.getTraps()
    }

    render() {
        const { blocks } = this.props.blocks
        const { traps } = this.props.traps
        return (
            <View style={styles.container} testID='monitoring'>
                <Header title={'Monitoring'} />
                <Tabs>
                    <MonitoringDetails
                        data={blocks}
                        showSearchBar={true}
                        type={CONSTANTS.BLOCKS}
                        iconSource={require('../../assets/icons/bell.png')}
                    />
                    <MonitoringDetails
                        data={traps}
                        shouldOpenModal={true}
                        showSearchBar={true}
                        type={CONSTANTS.TRAPS}
                        iconSource={require('../../assets/icons/alert.png')}
                    />
                </Tabs>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    blocks: { ...state.blocks },
    traps: { ...state.traps }
})
const mapDispatchToProps = {
    getBlocks: getBlocks,
    getTraps: getTraps
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Monitoring)


