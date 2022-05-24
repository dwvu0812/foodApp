import { Text, View, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import Back from '../assets/imgs2/back.svg'

const screenWidth = Dimensions.get('screen').width

class PaymentMethod extends Component {
  
    
    render() {
      return (
        <View>
          <Text>PaymentMethod</Text>
        </View>
      )
    }
}

export default class Payment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Back />
            <Text
                style={{fontWeight: '700', fontSize: 20, color: 'black', marginLeft: 95, lineHeight: 20}}
            >Review Food</Text>
        </View>
        <View style={styles.body}>
            <PaymentMethod />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // alignItems: 'center',
        margin: 20
    },
    header: {
        flexDirection: 'row',
        alignItem: 'center',
        color: 'black',
        marginBottom: 50
    },
    body: {

    }
})