import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import {store} from '../../redux/store'


const withRedux = WrappedComponent => props => (
    <Provider store={store}>
        <WrappedComponent {...props} />
    </Provider>
)

export default withRedux