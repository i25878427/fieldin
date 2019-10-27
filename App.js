import React from 'react';
import { View, StyleSheet } from 'react-native'
import withRedux from './src/hoc/with_redux'
import MonitoringScreen from './src/screens/monitoring'


const App = () => {
  return (
    <View style={styles.container}>
      <MonitoringScreen />
    </View>
  )
}
export default withRedux(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})