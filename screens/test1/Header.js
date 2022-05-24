import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Search from './assets/img/search.svg';
import More from './assets/img/more.svg';
import BackSearch from './assets/img/backsearch.svg';
import Back from './assets/img/back.svg';
import Check from './assets/img/check.svg';
import Close from './assets/img/close.svg';
import Save from './assets/img/save.svg';

const windowWidth = Dimensions.get('window').width;

export default function Header({
  title,
  isAddNote,
  onBack = () => null,
  onAdd = () => null,
  onDelete = () => null,
  onSearch = () => null,
  valueSearch,
  editItem
}) {
  const [openSearch, setOpenSearch] = useState(false);

  const setSearch = () => {
    setOpenSearch(!openSearch);
  };

  const deleteText = () => {
      onSearch('');
  }

  return (
    <View style={styles.container}>
      {openSearch && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={setSearch}>
            <BackSearch />
          </TouchableOpacity>
          <TextInput
            value={valueSearch}
            onChangeText={onSearch}
            style={{marginLeft: 10, width: windowWidth / 2, fontSize: 15}}
          />
        </View>
      )}
      {!openSearch && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {isAddNote && (
            <TouchableOpacity onPress={onBack}>
              <Back />
            </TouchableOpacity>
          )}
          <Text style={[styles.title, {marginLeft: isAddNote ? 20 : 0}]}>
            {title}
          </Text>
        </View>
      )}
      {isAddNote ? (
        <TouchableOpacity onPress={onAdd}>
          {editItem ? <Save/> : <Check />}
        </TouchableOpacity>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 50,
          }}>
          <TouchableOpacity onPress={openSearch ? deleteText :setSearch}>
            {openSearch ? <Close/> : <Search />}
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <More />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 18,
    backgroundColor: '#fff',
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
});
