import React, { Component } from 'react'
import { Text, Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
const { height, width } = Dimensions.get('window');

class ShowCounter extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.count}>{this.props.counter}</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    count: {
        fontSize: 100, 
        color: '#000000',
    }
})

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter,
    };
};

export default connect(mapStateToProps)(ShowCounter);