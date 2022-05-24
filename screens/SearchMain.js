import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions, FlatList,
  Image, StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import Clock from '../assets/svg/clock.svg';
import Marker from '../assets/svg/marker.svg';
import Search from '../assets/svg/search.svg';
import Star from '../assets/svg/star.svg';

const windowWidth = Dimensions.get('window').width;
const food1 = require('../assets/images/foodImages/food1.png');
const itemWidth = windowWidth - 60;

function ItemRestaurant({dataItem}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: itemWidth,
        marginBottom: 20,
      }}>
      <Image
        style={{width: itemWidth / 3, height: itemWidth / 3, borderRadius: 20}}
        source={dataItem.img}
      />
      <View style={{marginLeft: 20, flexDirection: 'column'}}>
        <Text style={{fontSize: 14, marginBottom: 10, fontWeight: '700'}}>
          {dataItem.name}
        </Text>
        <Text
          style={{
            color: '#34495E',
            marginBottom: 10,
            fontSize: 12,
            maxWidth: '80%',
          }}>
          <Marker /> {dataItem.address}
        </Text>
        <Text style={{color: '#34495E', marginBottom: 10, fontSize: 12}}>
          <Clock /> {dataItem.distance}
        </Text>
        <View style={{flexDirection: 'row'}}>
          {Array.from(Array(dataItem.star)).map((item, index) => (
            <Star key={index} />
          ))}
        </View>
      </View>
    </View>
  );
}

const listNearMe = [
  {
    id: 1,
    name: 'Dapur Ijah Restaurant',
    img: food1,
    address: '123, Đường số 1, Quận 1, TP. Hồ Chí Minh',
    distance: '3 min - 1.1 km',
    star: 5,
  },
  {
    id: 2,
    name: 'Biển Restaurant',
    img: food1,
    address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
    distance: '15 min -3 km',
    star: 4,
  },
  {
    id: 3,
    name: 'Biển Restaurant',
    img: food1,
    address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
    distance: '15 min -3 km',
    star: 4,
  },
  {
    id: 4,
    name: 'Biển Restaurant',
    img: food1,
    address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
    distance: '15 min -3 km',
    star: 4,
  },
  {
    id: 5,
    name: 'Biển Restaurant',
    img: food1,
    address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
    distance: '15 min -3 km',
    star: 4,
  },
  {
    id: 6,
    name: 'Biển Restaurant',
    img: food1,
    address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
    distance: '15 min -3 km',
    star: 4,
  },
];

export default function SearchMain({navigation}) {
  const renderItem = ({item, index}) => {
    return <ItemRestaurant dataItem={item} />;
  };
  const [data, setData] = useState([]);

  const [textSearch, setTextSearch] = useState('');
  useEffect(() => {
    if (textSearch) {
      setData(
        listNearMe.reduce((array, item) => {
          if (item.name.toLowerCase().includes(textSearch.toLowerCase())) {
            array.push(item);
          }
          return array;
        }, []),
      );
    }
  }, [textSearch]);

  const refInput = useRef();
  useEffect(() => {
    refInput.current.focus();
  }, []);
  return (
    <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: 'white'}}>
      <TouchableOpacity
        
        style={styles.search}>
        <Search onPress={() => navigation.navigate('Main')}/>
        <TextInput
          style={styles.textSearch}
          ref={refInput}
          // value={username}
          placeholder={'Search'}
          onChangeText={setTextSearch}
          // onFocus={() => {navigation.navigate('SearchMain');}
        />
      </TouchableOpacity>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={data}
        renderItem={renderItem}
        // ListEmptyComponent={() => {
        //   return <Text>List rỗng</Text>;
        // }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textSearch: {
    width: windowWidth / 1.5,
    fontSize: 14,
  },
  search: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ECF0F1',
    height: 50,
    paddingLeft: 15,
    borderRadius: 30,
    marginTop: 30,
    marginBottom: 10,
  },
  menuCommon: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 40,
  },
  menuCommon_img: {
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuCommon_text: {
    fontSize: 14,
    color: '#000',
  },
});
