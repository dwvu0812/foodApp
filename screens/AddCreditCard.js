import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import RightBack from '../assets/svg/rightback.svg';
import DarkPlus from '../assets/svg/drakplus.svg';
import ArrowBack from '../assets/svg/arrow_back_ios.svg';
import InputCommon from '../components/InputCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;

export default function AddCreditCard({navigation}) {
  const [name, setName] = useState('');
  const [bankname, setBankname] = useState('');
  const [cardnumber, setCardnumber] = useState('');
  // const [data, setData] = useState([]);

  let check = name && bankname && cardnumber ? true : false;
  let info = {
    name,
    bankname,
    cardnumber,
  };

  const pressAddBtn = () => {
    if (!name || !bankname || !cardnumber) {
      Alert.alert('Please add your data');
    } else {
      // console.log(info)
      AsyncStorage.getItem('cardInfo').then(async item => {
        let listCardInfo = JSON.parse(item);
        // console.log(listCardInfo)
        if (item == null) {
          await AsyncStorage.setItem('cardInfo', JSON.stringify([info]));
        } else {
          listCardInfo.push(info);
          console.log(listCardInfo);
          await AsyncStorage.setItem('cardInfo', JSON.stringify(listCardInfo));
        }
        navigation.navigate('PaymentSetting');
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PaymentSetting');
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          margin: 20,
          marginBottom: 40,
        }}>
        <ArrowBack />
        <Text style={styles.text}>Add Credit Card</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.card}>
          <Image
            style={{backgroundColor: '#C4C4C4', borderRadius: 30}}
            source={require('../assets/imgs/creditcard.png')}
          />
          <Text
            style={{
              position: 'absolute',
              color: '#fff',
              fontSize: 18,
              fontWeight: '700',
              left: 60,
              top: 20,
            }}>
            {name}
          </Text>
          <Text
            style={{
              position: 'absolute',
              color: '#fff',
              fontSize: 10,
              fontWeight: '400',
              left: 60,
              top: 120,
            }}>
            No {bankname}
          </Text>
          <Text
            style={{
              position: 'absolute',
              color: '#fff',
              fontSize: 12,
              fontWeight: '400',
              left: 60,
              top: 140,
            }}>
            {cardnumber}
          </Text>
          <Text
            style={{
              position: 'absolute',
              color: '#fff',
              fontSize: 14,
              fontWeight: '700',
              left: 60,
              top: 160,
            }}>
            $12.999.999.99
          </Text>
          <Text
            style={{
              position: 'absolute',
              color: '#fff',
              fontSize: 10,
              fontWeight: '400',
              right: 60,
              top: 20,
            }}>
            {bankname.split(' ')[0]}
          </Text>
          <Image
            style={{
              position: 'absolute',
              right: 60,
              top: 160,
            }}
            source={require('../assets/imgs/2circles.png')}
          />
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.title}>Bank name</Text>
          <TextInput
            style={styles.content}
            placeholder={'AZRAEN Bank'}
            onChangeText={setBankname}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Your name</Text>
          <TextInput
            style={styles.content}
            placeholder={'DuVK'}
            onChangeText={setName}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Card number</Text>
          <TextInput
            style={styles.content}
            placeholder={'4444 3784 1380 6739'}
            onChangeText={setCardnumber}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Data</Text>
          <TextInput style={styles.content} placeholder={'02/22'} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>CVV</Text>
          <TextInput style={styles.content} placeholder={'877'} />
        </View>

        <TouchableOpacity
          style={[
            styles.addText,
            {opacity: {check} ? 1 : 0.5},
            {disabled: !check},
          ]}
          onPress={() => {
            pressAddBtn();
          }}>
          <Text
            style={{
              textAlign: 'center',
              lineHeight: 50,
              fontSize: 18,
              fontWeight: '700',
              color: '#fff',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    position: 'relative',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginLeft: 100,
  },
  card: {
    alignItems: 'center',
    position: 'relative',
    color: '#fff',
    marginBottom: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: itemWidth,
    marginLeft: 30,
    // marginTop: 30,
  },
  title: {
    fontSize: 14,
    color: '#000',
    opacity: 0.5,
  },
  content: {
    fontSize: 14,
    color: '#000',
    // backgroundColor: 'red',
    textAlign: 'right',
  },
  addText: {
    width: windowWidth - 60,
    height: 50,
    backgroundColor: '#D35400',
    borderRadius: 30,
    marginLeft: 30,
    marginTop: 100,
  },
});
