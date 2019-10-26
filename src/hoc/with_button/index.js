import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native"

export default withButton = WrappedComponent => {
    class WithButton extends Component {

        onPressHandle = async () => {
            await this.props.onPress(this.props);

        }

        render() {
            if (this.props.disabled) {
                return (
                    <View style={this.props.style}>
                        <WrappedComponent {...this.props} />
                    </View>
                )
            }

            return (
                <TouchableOpacity onPress={this.onPressHandle} style={this.props.style}>
                    <WrappedComponent {...this.props} />
                </TouchableOpacity>
            );
        }
    }
    return WithButton;
};
