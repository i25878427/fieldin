import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './styles'

const SearchBar = ({ value, onChangeText, placeholder="Search" }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </View>
    )
}

export default SearchBar

