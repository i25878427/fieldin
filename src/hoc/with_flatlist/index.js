import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import _ from 'lodash'
import SearchBar from '../../components/search_bar'
import styles from './styles'

export default withFlatList = WrappedComponent => {
    class WithFlatList extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: this.props.data,
                dataAfterFilter: this.props.data,
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
                        keyExtractor={item => item.id}
                        data={dataAfterFilter}
                        // extraData={this.state}
                        renderItem={this.renderItem}
                        // onEndReached={this.handleLoadMore}
                        // onEndReachedThreshold={50}
                        ListFooterComponent={this.renderFooter}
                        showsVerticalScrollIndicator={false}
                    />
            )
        }
        renderListHeaderComponent = () => this.props.showSearchBar ?
            <SearchBar
                onChangeText={this.onSearchBarChangeText}
                value={this.state.searchBarValue}
                type={this.props.type}
            />
            :
            null

        renderListEmptyComponent = () => {
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

        handleLoadMore = () => {

        }

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
    return WithFlatList
}
