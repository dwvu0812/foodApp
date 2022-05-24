import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.textItem}>
        <View style={styles.line}></View>
        <Text style={{fontSize: 14, color: '#34495E', marginLeft: 10}}>Or connect with</Text>
      </View>
      <Image source={require('../assets/imgs/food2.png')}/>
      <Image style={styles.fb} source={require('../assets/imgs/fb.png')}/>
      <Image style={styles.gg} source={require('../assets/imgs/gg.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 50,
    marginRight: 30,
    position: 'relative'
  },
  textItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    borderTopWidth: 1,
    borderColor: '#000',
    flex: 1,
    opacity: 0.3
  },
  fb: {
    position: 'absolute',
    bottom: 60,
    right: 60
  },
  gg: {
    position: 'absolute',
    bottom: 60,
    right: 0
  }
})
