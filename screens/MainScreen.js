import {
  View,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Star from '../assets/svg/star.svg';
import Clock from '../assets/svg/clock.svg';
import Marker from '../assets/svg/marker.svg';
import Search from '../assets/svg/search.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import ButtonCommon from '../components/ButtonCommon';
const food1 = require('../assets/images/foodImages/food1.png');
const windowWidth = Dimensions.get('window').width;
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

const foodMenu = [
  [
    {title: 'Burgers', img: require('../assets/imgs/burger2.png')},
    {title: 'Fruit', img: require('../assets/imgs/fruit.png')},
  ],
  [
    {title: 'Pizza', img: require('../assets/imgs/pizza.png')},
    {title: 'Sushi', img: require('../assets/imgs/sushi.png')},
  ],
  [
    {title: 'BBQ', img: require('../assets/imgs/bbq.png')},
    {title: 'Noodle', img: require('../assets/imgs/noodle.png')},
  ],
  [
    {title: 'Hotpot', img: require('../assets/imgs/bbq.png')},
    {title: 'Noodle', img: require('../assets/imgs/noodle.png')},
  ],
];

export default function MainScreen({navigation}) {
  const [username, setusername] = useState('TÚ');
  const ref = useRef();
  const refInput = useRef();

  const [listNearMe, setListNearMe] = useState([
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
  ]);
  // useEffect(() => {
  //   if (refInput.current.focus()) {
  //     const unsubscribe = navigation.addListener('focus', () => {
  //       refInput.current?.focus();
  //       navigation.navigate('SearchMain');
  //     });
  //     return unsubscribe;
  //   }
  // });

  const logout = () => {
    AsyncStorage.removeItem('user');
    navigation.navigate('LoginScreen');
  };

  const renderItem = ({item, index}) => {
    return <ItemRestaurant dataItem={item} />;
  };

  const menuCommon = [
    {title: 'Drink', img: require('../assets/imgs/coffeecup.png')},
    {title: 'Food', img: require('../assets/imgs/burger.png')},
    {title: 'Cake', img: require('../assets/imgs/cake.png')},
    {title: 'Snack', img: require('../assets/imgs/chips.png')},
  ];
  const [select, setSelect] = useState(1);

  const HeaderMain = () => {
    return (
      <>
        <View style={styles.search}>
          <Search />
          <TextInput
            style={styles.textSearch}
            ref={refInput}
            // value={username}
            placeholder={'Search'}
            onChangeText={text => {
              setusername(text);
            }}
            onFocus={() => {navigation.navigate('SearchMain');}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 33,
          }}>
          <Marker height={20} width={20} />
          <Text style={{color: '#000', marginLeft: 10}}>
            9 West 46 Th Street, New York City
          </Text>
        </View>
        <FlatList
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          data={menuCommon}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => setSelect(index)}
                style={styles.menuCommon}>
                <View
                  style={[
                    styles.menuCommon_img,
                    {backgroundColor: index == select ? '#D35400' : '#ECF0F1'},
                  ]}>
                  <Image source={item.img} />
                </View>
                <Text style={styles.menuCommon_text}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 20,
          }}>
          <Text style={{color: '#000', fontWeight: '700', fontSize: 18}}>
            Food Menu
          </Text>
          <Text style={{color: '#000', fontWeight: '400', fontSize: 12}}>
            View all
          </Text>
        </View>
        <FlatList
          data={foodMenu}
          horizontal={true}
          style={{maxHeight: (itemWidth / 3) * 2 + 20, marginBottom: 20}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            const purple = 'rgba(155, 89, 182, 0.3)';
            const lightBlue = 'rgba(52, 152, 219, 0.3)';
            return (
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: index != 0 ? 20 : 0,
                }}>
                {/* <FontAwesomeIcon name="bacteria" /> */}
                <TouchableOpacity
                  style={{
                    width: itemWidth / 3,
                    borderRadius: 20,
                    paddingTop: 10,
                    paddingLeft: 15,
                    backgroundColor: index % 2 == 0 ? lightBlue : purple,
                    height: itemWidth / 3,
                    marginBottom: 20,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onPress={() => {
                    navigation.navigate('FoodDetailScreen', {
                      item: item[0],
                    });
                  }}>
                  <Text
                    style={{fontWeight: '700', fontSize: 14, color: '#FFFFFF'}}>
                    {item[0].title}
                  </Text>
                  <Image
                    source={item[0].img}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: itemWidth / 3 - 20,
                      height: itemWidth / 3 - 20,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: itemWidth / 3,
                    paddingTop: 10,
                    paddingLeft: 15,
                    borderRadius: 20,
                    backgroundColor: index % 2 == 0 ? purple : lightBlue,
                    height: itemWidth / 3,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onPress={() => {
                    //NOTES: Chuyển màn hình kèm theo biến - Cái tên giống với name khai báo trong MainNavigation
                    navigation.navigate('FoodDetailScreen', {
                      item: item[1],
                    });
                    // setFood(item[1].title)
                  }}>
                  <Text
                    style={{fontWeight: '700', fontSize: 14, color: '#FFFFFF'}}>
                    {' '}
                    {item[1].title}
                  </Text>
                  <Image
                    source={item[1].img}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: itemWidth / 3 - 20,
                      height: itemWidth / 3 - 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 20,
          }}>
          <Text style={{color: '#000', fontWeight: '700', fontSize: 18}}>
            Near Me
          </Text>
          <Text style={{color: '#000', fontWeight: '400', fontSize: 12}}>
            View all
          </Text>
        </View>
      </>
    );
  };

  const scrollUp = () => {
    ref.current.scrollToIndex({
      index: 1,
      animated: true,
    });
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: 'white'}}>
      {/* <View style={styles.search}>
        <Search />
        <TextInput
          style={styles.textSearch}
          // ref={refInput}
          // value={username}
          placeholder={'Search'}
          onChangeText={text => {
            setusername(text);
          }}
        />
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 33}}>
        <Marker height={20} width={20} />
        <Text style={{color: '#000', marginLeft: 10}}>
          9 West 46 Th Street, New York City
        </Text>
      </View> */}

      {/* <FlatList
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        data={menuCommon}
        renderItem={({item, index}) => {
          return (
            <View style={styles.menuCommon}>
              <View
                style={[
                  styles.menuCommon_img,
                  {backgroundColor: index == 1 ? '#D35400' : '#ECF0F1'},
                ]}>
                <Image source={item.img} />
              </View>
              <Text style={styles.menuCommon_text}>{item.title}</Text>
            </View>
          );
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 20,
        }}>
        <Text style={{color: '#000', fontWeight: '700', fontSize: 18}}>Food Menu</Text>
        <Text style={{color: '#000', fontWeight: '400', fontSize: 12}}>View all</Text>
      </View> */}

      <FlatList
        ref={ref}
        ListHeaderComponent={HeaderMain}
        keyExtractor={item => item.id.toString()}
        data={listNearMe}
        renderItem={renderItem}
        // ListFooterComponent={() => (
        //   <ButtonCommon
        //     text={'Logout'}
        //     onPress={() => {
        //       //NOTES: Chuyển màn hình - Cái tên giống với name khai báo trong MainNavigation
        //       navigation.navigate('Login');
        //     }}
        //   />
        // )}
        ListEmptyComponent={() => {
          return <Text>List rỗng</Text>;
        }}
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
