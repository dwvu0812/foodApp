import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class MenuScreen extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            name: 'Hello'
        }
    }
    pressButton = () => {
        this.setState({
            name: 'Hi'
        })
    }
    
    render() {
        const {warning} = this.props
        const {name} = this.state
        return (
          <View>
            <Text>MenuScreen: {name}</Text>
            <TouchableOpacity onPress={this.pressButton}>
                <Text>Click me</Text>
            </TouchableOpacity>
          </View>
        );
    }
}