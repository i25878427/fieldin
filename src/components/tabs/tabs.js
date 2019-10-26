import React, { Component } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';

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
