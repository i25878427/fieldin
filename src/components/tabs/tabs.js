import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

 class Tabs extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Pests' },
            { key: 'second', title: 'Traps' },
        ],
    };

    render() {
        return (
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first:  () => this.props.children[0],
                        second: () => this.props.children[1]
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                />
        );
    }
}

export default Tabs



const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });