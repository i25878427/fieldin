import React, { Component } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import PropTypes from 'prop-types'

class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: props.routes
        }
    }
    render() {
        return (
            <TabView
                testID="tabs"
                navigationState={this.state}
                renderScene={SceneMap({
                    first: () => this.props.children[0],
                    second: () => this.props.children[1]
                })}
                onIndexChange={index => this.setState({ index })}
            />
        );
    }
}

export default Tabs


Tabs.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        accessibilityLabel: PropTypes.string
    })).isRequired,
}