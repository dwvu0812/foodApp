import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import RightBack from '../assets/svg/rightback.svg';
import DarkPlus from '../assets/svg/drakplus.svg';
import ArrowBack from '../assets/svg/arrow_back_ios.svg';
import InputCommon from '../components/InputCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;

export default function PaymentSetting({navigation}) {
  const [title, setTitle] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('cardInfo').then(value => {
      if (value) {
        setData(JSON.parse(value));
        // console.log(data);
      }
      return () => {
        AsyncStorage.removeItem('cardInfo')
      }
    });
  });

  const PaymentItem = ({title, content, source}) => {
    return (
      <View style={[styles.flexCommons, styles.itemContainer]}>
        <View style={[styles.flexCommons]}>
          <View style={[styles.image]}>
            <Image source={source} />
          </View>
          <Text style={{marginLeft: 10, color: '#000'}}>{title}</Text>
        </View>
        <View style={[styles.flexCommons]}>
          <Text style={{marginRight: 10, color: '#000'}}>{content}</Text>
          <RightBack />
        </View>
      </View>
    );
  };
  const AddPayment = ({title, source}) => {
    return (
      <View style={[styles.flexCommons, styles.itemContainer]}>
        <View style={[styles.flexCommons]}>
          <View style={styles.image2}>
            <Image source={source} />
          </View>
          <Text style={{marginLeft: 10, color: '#000'}}>{title}</Text>
        </View>
        <View style={[styles.image]}>
          <DarkPlus />
        </View>
      </View>
    );
  };

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
        <Text style={styles.text}>Review food</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Paypal')}>
        <PaymentItem
          title={'Paypal'}
          content={'Itoh@gmail.com'}
          source={require('../assets/imgs/paypal.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity >
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={({item, index}) => {
            // console.log(item)
            return (
              <PaymentItem
                title={'Credit Card'}
                content={item.cardnumber}
                source={require('../assets/imgs/credit.png')}
              />
            );
          }}
          // style={{backgroundColor: 'red'}}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AddCreditCard')}>
        <AddPayment
          title={'Add new payment method'}
          source={require('../assets/imgs/card.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    position: 'relative',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginLeft: 100,
  },
  flexCommons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainer: {
    width: itemWidth,
    marginLeft: 30,
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  image: {
    backgroundColor: '#ECF0F1',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  image2: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
});
