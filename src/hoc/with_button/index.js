import React, { Component } from "react"
import { TouchableOpacity, View } from "react-native"
import PropTypes from 'prop-types'

const withButton = WrappedComponent => {
    class WithButton extends Component {
        onPressHandle = async () => {
            await this.props.onPress(this.props);
        }
        render() {
            if (this.props.disabled) {
                return (
                    <View style={this.props.style} testID={this.props.testID}>
                        <WrappedComponent {...this.props} />
                    </View>
                )
            }
            return (
                <TouchableOpacity onPress={this.onPressHandle} style={this.props.style} testID={this.props.testID}>
                    <WrappedComponent {...this.props} />
                </TouchableOpacity>
            );
        }
    }
    WithButton.propTypes = {
        disabled: PropTypes.bool,
        testID: PropTypes.string,
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    }
    return WithButton;

};



export default withButton
