import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import Header from './Header';
import box from './assets/img/box.png';
import Plus from './assets/img/plus.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({
  setScreen,
  listNote,
  search,
  setSearch,
  setEditItem,
}) {
  const ListEmpty = () => {
    return (
      <View
        style={{
          flex: 1,
          height: windowHeight / 1.5,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 3,
        }}>
        <Image source={box} style={{width: 105, height: 100}} />
        <Text style={styles.textEmpty}>You have no to-dos</Text>
      </View>
    );
  };
  const Item = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setEditItem(item);
          setScreen('AddNote');
        }}
        style={[
          styles.itemContainer,
          {marginLeft: index % 2 == 0 ? 15 : 20, overflow: 'hidden'},
        ]}>
        <Text numberOfLines={1} style={styles.itemTitle}>
          {item.title}
        </Text>
        <Text numberOfLines={5} style={styles.itemContent}>
          {item.content}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Header
        title="Todos"
        onSearch={setSearch}
        valueSearch={search}
        onDelete={() => {
          Alert.alert(
            'Delete everything?',
            'Are you sure you want to remove everything',
            [
              {
                text: 'No',
              },
              {
                text: 'Yes',
                onPress: async () => {
                  try {
                    await AsyncStorage.removeItem('note');
                    setScreen('HomeScreen');
                  } catch (err) {
                    console.log(err);
                  }
                },
              },
            ],
          );
        }}
      />
      <FlatList
        style={{flex: 1}}
        data={listNote}
        renderItem={Item}
        numColumns={2}
        horizontal={false}
        ListEmptyComponent={ListEmpty}
      />
      <TouchableOpacity
        onPress={() => setScreen('AddNote')}
        style={styles.btnAdd}>
        <Plus />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textEmpty: {
    color: 'black',
    opacity: 0.4,
    marginTop: 20,
  },
  btnAdd: {
    position: 'absolute',
    right: 40,
    bottom: 50,
    borderRadius: 30,
    width: 60,
    height: 60,
    backgroundColor: '#00B2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    maxHeight: 188,
    padding: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: (windowWidth - 50) / 2,
    elevation: 3,
    backgroundColor: 'white',
    // marginLeft: 20,
    marginTop: 20,
    borderRadius: 15,
  },
  itemTitle: {
    color: '#000',
    fontWeight: '500',
    lineHeight: 24,
    fontSize: 16,
    marginBottom: 10,
  },
  itemContent: {
    color: '#000',
    fontWeight: '400',
    lineHeight: 18,
    fontSize: 12,
  },
});
