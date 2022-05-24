import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddNote({setScreen, editItem, listNote}) {
  const [title, setTitle] = useState(editItem ? editItem.title : '');
  const [content, setContent] = useState(editItem ? editItem.content : '');
  const addAction = () => {
    AsyncStorage.setItem(
        'note',
        JSON.stringify([...listNote, {
            id: listNote.length,
            title, content}]),
      ).then(() => {setScreen('HomeScreen');})
  }
  const editAction = () => {
    const index = editItem.id;
    const newListNote = [...listNote];
    newListNote.slice(index, 1, {
        id: index,
        title, content
    })
    AsyncStorage.setItem('note', JSON.stringify(newListNote).then(() => {
        setScreen('HomeScreen')
    }))
  }

  return (
    <View style={{flex: 1}}>
      <Header
        title="Add"
        isAddNote={true}
        onBack={() => setScreen('HomeScreen')}
        editItem={editItem}
        onAdd={editItem? editAction : addAction}
      />
      <TextInput
        placeholder="Title"
        style={styles.inputTitle}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Description"
        style={styles.inputDescription}
        multiline={true}
        value={content}
        onChangeText={setContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 15,
    marginTop: 20,
    // marginBottom: 24
  },
  inputDescription: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 15,
  },
});
