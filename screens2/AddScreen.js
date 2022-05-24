import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, Alert  } from 'react-native';
import React , {useState, useEffect}from 'react';
import Check from '../assets/imgs2/check.svg';
import Back from '../assets/imgs2/back.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';


const screenWidth = Dimensions.get('screen').width;

export default function AddScreen({changeScreen}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState({});
  const pressBack = () => {
    changeScreen('MainScreen')
    }
  const addTodoList = () => {
    if (title.length > 0 && description.length > 0) {
        const newTodo = { title, description};
        AsyncStorage.getItem('todoList').then(todos => {
            const todoList = JSON.parse(todos)
            if (todos === null) {
                AsyncStorage.setItem('todoList', JSON.stringify([newTodo]))
            } else {
                todoList.push(newTodo)
                AsyncStorage.setItem('todoList', JSON.stringify(todoList))
            }
            Alert.alert('Success', 'Add new todo success', [{
                text: 'Hoàn thành',
                onPress: pressBack
            }])
        })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity 
            style={{marginRight: 30}}
            onPress={() => {changeScreen('MainScreen')}}
        >
            <Back />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Add</Text>
        <TouchableOpacity 
            style={{right: 10, position:'absolute'}}
            onPress={addTodoList}
        ><Check />
        </TouchableOpacity>
      </View>
      <View style={styles.borderBottom}></View>
      <View style={styles.body}>
        <TextInput
            style={{
                fontSize: 20,
                fontWeight: 'bold'
            }}
            placeholder='Title'
            onChangeText={setTitle}
        />
        <TextInput
            style={{
                fontSize: 16
            }} 
            multiline = {true}
            placeholder='Description'
            onChangeText={setDescription}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20

    },
    top: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: screenWidth -30,
        height: 60,
    },
    textHeader: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000'
    },
    borderBottom: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0, 0, 0, 0.3)',
        width: screenWidth
    },
    body: {
        flexDirection: 'column',
        justifyContent: 'flex-start',

    },
   
});