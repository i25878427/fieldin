import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import _ from 'lodash'
import SearchBar from '../../components/search_bar'

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
                <View>
                    <FlatList
                        contentContainerStyle={{ justifyContent: 'center' }}
                        ListHeaderComponent={this.renderListHeaderComponent}
                        ListEmptyComponent={this.renderListEmptyComponent}
                        ItemSeparatorComponent={this.renderItemSeparatorComponent}
                        keyExtractor={item => item.id}
                        data={dataAfterFilter}
                        extraData={this.state}
                        renderItem={this.renderItem}
                        onEndReached={this.handleLoadMore}
                        onEndReachedThreshold={50}
                        ListFooterComponent={this.renderFooter}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

            )
        }
        renderListHeaderComponent = ( ) => this.props.showSearchBar ?
            <SearchBar
                onChangeText={this.onSearchBarChangeText}
                value={this.state.searchBarValue}
            />
            :
            null

        renderListEmptyComponent = () => <View />

        renderItemSeparatorComponent = () => <View style={{ height: 1, flex: 1, backgroundColor: '#E1E6F0' }} />

        renderItem = ({ item }) => <WrappedComponent
            {...item}
            {..._.omit(this.props, ['data'])}
        />

        handleLoadMore = () => {

        }

        renderFooter = () => <View />

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
