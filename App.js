import React, { Component } from 'react';
import { View, Text } from 'react-native'
import withRedux from './src/hoc/with_redux'
import MonitoringScreen from './src/screens/monitoring'


const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <MonitoringScreen />
    </View>
  )
}


export default withRedux(App)
