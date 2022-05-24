import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import React, { useState, useEffect }from 'react';
import Search from '../assets/imgs2/search.svg';
import More from '../assets/imgs2/more.svg';
import Plus from '../assets/imgs2/plus.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('screen').width;
const itemWidth = screenWidth - 40;



export default function MainScreen({changeScreen}) {
  const [todoList, setTodoList] = useState([]);
  

  useEffect(() => {
    AsyncStorage.getItem('todoList').then(todos => {
        let todolist = JSON.parse(todos);
        setTodoList(todolist)
    })}, [todoList]);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={[styles.textHeader, {marginLeft: 20}]}>Todos</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 70,
            padding: 10,
          }}>
          <TouchableOpacity>
            <Search />
          </TouchableOpacity>
          <TouchableOpacity>
            <More />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.borderBottom}></View>

      {Boolean(!todoList) && (
        <View style={styles.body}>
          <Image source={require('../assets/imgs2/box.png')} />
          <Text style={styles.textBody}>You have no to-dos</Text>
        </View>
      )}

      {Boolean(todoList) && (
        <View style={styles.listrender}>
            <FlatList
              data={todoList}
              numColumns={2}
              horizontal={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.cardShadow}>
                    <View style={styles.cardContainer}>
                      <Text
                        style={{fontWeight: '700', fontSize: 20, marginBottom: 10}}>
                        {item.title}
                      </Text>
                      <Text style={{fontSize: 16}}>{item.description}</Text>
                      
                    </View>
                    
                  </View>
                );
              }}
            />
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 20, 
                    left: 15,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    padding: 5, 
                    backgroundColor: 'yellow',
                }}
                onPress={() => {
                    AsyncStorage.removeItem('todoList');
                    setTodoList([])
                }}
            >
                <Text>Delete all</Text>
            </TouchableOpacity>
       </View>
      )}

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          changeScreen('AddScreen');
        }}>
        <Plus />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //   justifyContent: '',
    // alignItems: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth - 30,
    height: 60,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    width: screenWidth,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBody: {
    fontSize: 16,
    opacity: 0.4,
    marginTop: 16,
  },
  addBtn: {
    position: 'absolute',
    width: 60,
    height: 60,
    right: 40,
    bottom: 50,
    backgroundColor: '#00B2FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },
  listrender: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  
  cardShadow: {
    borderRadius: 16,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 10,

   },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    width: itemWidth/2 -10,
    minHeight: 150,
    padding: 10,
    
   },
});
