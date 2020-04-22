import React, { Component } from 'react';
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../../../actions/counterActions'

const { height, width } = Dimensions.get('window');

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        // console.log(this.props)
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.counterTitle}>Kurangi atau Tambahi</Text>
                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={() => this.props.reduxIncreaseCounter()}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.counterText}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.reduxDecreaseCounter()}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        )
    }
}
// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterTitle: {
        fontFamily: 'System',
        fontSize: 32,
        fontWeight: '700',
        color: '#000',
    },
    counterText: {
        fontFamily: 'System',
        fontSize: 36,
        fontWeight: '400',
        color: '#000',
    },
    buttonText: {
        fontFamily: 'System',
        fontSize: 50,
        fontWeight: '300',
        color: '#007AFF',
        marginLeft: 40,
        marginRight: 40,
    },
});

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reduxIncreaseCounter: () => dispatch(increaseCounter()),
        reduxDecreaseCounter: () => dispatch(decreaseCounter()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter)