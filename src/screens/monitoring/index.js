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
        const { blocks, blocksLoading, traps, trapsLoading } = this.props.monitoring
        return (
            <View style={styles.container} testID='monitoring'>
                <Header title={'Monitoring'} />
                <Tabs
                    testID="tabs"
                    routes={[
                        { key: 'first', title: 'Pests', accessibilityLabel: 'pests' },
                        { key: 'second', title: 'Traps', accessibilityLabel: 'traps' }
                    ]}
                >
                    <MonitoringDetails
                        data={blocks}
                        showSearchBar={true}
                        type={CONSTANTS.BLOCKS}
                        iconSource={require('../../assets/icons/bell.png')}
                        loading={trapsLoading}
                    />
                    <MonitoringDetails
                        data={traps}
                        shouldOpenModal={true}
                        showSearchBar={true}
                        type={CONSTANTS.TRAPS}
                        iconSource={require('../../assets/icons/alert.png')}
                        loading={blocksLoading}
                    />
                </Tabs>
            </View >
        )
    }
}

const mapStateToProps = state => ({
    monitoring: { ...state.monitoring }
})
const mapDispatchToProps = {
    getBlocks: getBlocks,
    getTraps: getTraps
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Monitoring)


