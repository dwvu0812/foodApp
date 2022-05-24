import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect }from 'react';
import RightBack from '../assets/svg/rightback.svg';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 70;

export default function Profile({navigation, route}) {
  useEffect(() => {}, [route.params]);

  const fName = route.params?.fName;
  const lName = route.params?.lName;
  const date = route.params?.date;

  const ItemProfile = ({text}) => {
    return (
      <View style={styles.item}>
        <Text style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
          {text}
        </Text>
        <RightBack />
      </View>
    );
    }
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/imgs/avatar.png')} />
      <Text style={styles.title}>{route.params?.fName ? `${fName} ${lName}`: '...'}</Text>
      <Text style={styles.phone}>{date? date :'...'}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
        <ItemProfile text={'My Profile'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
        <ItemProfile text={'Change Password'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PaymentSetting')}>
        <ItemProfile text={'Payment Settings'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Voucher')}>
        <ItemProfile text={'My Voucher'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <ItemProfile text={'Notification'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <ItemProfile text={'About Us'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <ItemProfile text={'Contact Us'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.signoutText}>
        <Text
          style={{
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 18,
            fontWeight: '700',
            color: '#000',
          }}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#fff',
  },
  img: {
    marginTop: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
    color: '#000',
  },
  phone: {
    color: '#000',
  },
  item: {
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'space-between',
    width: itemWidth,
    marginLeft: 30,
    marginRight: 40,
    marginTop: 25,
  },
  signoutText: {
    width: windowWidth - 60,
    height: 50,
    backgroundColor: '#ECF0F1',
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    left: 30,
  },
});
