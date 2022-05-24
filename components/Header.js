import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Back from '../assets/svg/arrow_back_ios.svg';

export default function Header({navigation}) {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        marginLeft: 30,
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Back />
      </TouchableOpacity>
    </View>
  );
}
