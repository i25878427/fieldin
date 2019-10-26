import React from 'react'
import { View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const SearchBar = ({ type, value, onChangeText, placeholder="Search" }) => {
    return (
        <View style={styles.container}>
            <TextInput
                testID={`searchbar_${type.toLowerCase()}`}
                placeholder={placeholder}
                style={styles.text}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </View>
    )
}

export default SearchBar

SearchBar.propTypes = {
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
}