import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './styles'

const SearchBar = ({ type, value, onChangeText, placeholder="Search" }) => {
    debugger
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

