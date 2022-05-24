import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ArrowBack from '../assets/svg/arrow_back_ios.svg';
import Check from '../assets/svg/check.svg';
import Clock from '../assets/svg/clock.svg';
import Dislike from '../assets/svg/dislike.svg';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;

export default function Voucher({navigation}) {
  const [select, setSelect] = useState(0);

  const orderList = [
    {
      image: require('../assets/imgs/voucher.png'),
      title: 'Sale off 30% for Pizza',
      time: 'Apr 10 - Apr 30',
      days: '11 days left',
    },
    {
      image: require('../assets/imgs/voucher.png'),
      title: 'Sale off 30% for Pizza',
      time: 'Apr 10 - Apr 30',
      days: '11 days left',
    },
    {
      image: require('../assets/imgs/voucher.png'),
      title: 'Sale off 30% for Pizza',
      time: 'Apr 10 - Apr 30',
      days: '11 days left',
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          margin: 20,
          marginBottom: 40,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <ArrowBack />
        </TouchableOpacity>
        <Text style={styles.text}>My Voucher</Text>
      </View>
      <FlatList
        data={orderList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.itemContainer}>
              <View style={styles.image}>
                <Image source={item.image} />
              </View>
              <View style={styles.itemText}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: '#000',
                    lineHeight: 21,
                  }}>
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                    marginTop: 10,
                  }}>
                  <Clock style={styles.MR10} />
                  <Text>{item.time}</Text>
                </View>
                <Text style={{color: '#E74C3C'}}>{item.days}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setSelect(index);
                }}
                style={[
                  styles.rate,
                  {backgroundColor: select == index ? '#D35400' : '#ECF0F1'},
                ]}>
                {select == index && <Check />}
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={styles.sendText}>
        <Text
          style={{
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 18,
            fontWeight: '700',
            color: '#fff',
          }}>
          Send
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginLeft: 100,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // width: itemWidth,
    marginBottom: 20,
    position: 'relative',
  },
  image: {
    marginLeft: 30,
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#ECF0F1',
  },
  itemText: {
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  rate: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    top: 20,
    backgroundColor: '#ECF0F1',
    borderRadius: 30,
    width: 30,
    height: 30,
    color: '#fff',
  },
  ML10: {
    marginLeft: 10,
  },
  MR10: {
    marginRight: 10,
  },
  sendText: {
    width: windowWidth - 60,
    height: 50,
    backgroundColor: '#D35400',
    borderRadius: 30,
    marginLeft: 30,
    marginBottom: 20,
  },
});
