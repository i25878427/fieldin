import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import _ from 'lodash'
import SearchBar from '../../components/search_bar'
import styles from './styles'

export default withFlatList = WrappedComponent => {
    class WithFlatList extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: props.data,
                dataAfterFilter: props.data,
                searchBarValue: ''
            }
        }
        render() {
            const { dataAfterFilter } = this.state
            return (
                <FlatList
                    ListHeaderComponent={this.renderListHeaderComponent}
                    ListEmptyComponent={this.renderListEmptyComponent}
                    ItemSeparatorComponent={this.renderItemSeparatorComponent}
                    keyExtractor={item => `${item.id}`}
                    data={dataAfterFilter}
                    renderItem={this.renderItem}
                    ListFooterComponent={this.renderFooter}
                    showsVerticalScrollIndicator={false}
                />
            )
        }
        renderListHeaderComponent = () =>
            this.props.showSearchBar
                ?
                <SearchBar
                    onChangeText={this.onSearchBarChangeText}
                    value={this.state.searchBarValue}
                    type={this.props.type}
                />
                :
                null

        renderListEmptyComponent = () => {
            if (this.props.loading) return (
                <View style={styles.emptyListContainer}>
                    <ActivityIndicator size={'large'} />
                </View>
            )
            if (this.state.data && this.state.data.length === 0) {
                return (
                    <View style={styles.emptyListContainer}>
                        <Text>{'No Data'}</Text>
                    </View>
                )
            }
            return null
        }

        renderItemSeparatorComponent = () => <View style={styles.itemSeperator} />

        renderItem = ({ item }) => <WrappedComponent
            {...item}
            {..._.omit(this.props, ['data'])}
        />

        renderFooter = () => {
            if (this.state.data) return null
            return <ActivityIndicator size={'large'} />
        };

        onSearchBarChangeText = (text) => {
            const data = this.state.data
            const dataAfterFilter = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
            this.setState({
                searchBarValue: text,
                dataAfterFilter: dataAfterFilter
            })
        }
    }
    WithFlatList.propTypes = {
        data: PropTypes.array
    }
    return WithFlatList
}
