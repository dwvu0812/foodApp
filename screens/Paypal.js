import React from 'react';
import {Dimensions, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import RightBack from '../assets/svg/rightback.svg';
import DarkPlus from '../assets/svg/drakplus.svg';
import ArrowBack from '../assets/svg/arrow_back_ios.svg';
import InputCommon from '../components/InputCommon';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;


export default function PaymentSetting({navigation}) {
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
              {/* <RightBack /> */}
            </View>
          </View>
        );
      };
   
      
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('PaymentSetting')}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          margin: 20,
          marginBottom: 40,
        }}>
        <ArrowBack />
        <Text style={styles.text}>Paypal</Text>
      </TouchableOpacity>
      <PaymentItem
        title={'Paypal'}
        content={'Itoh@gmail.com'}
        source={require('../assets/imgs/paypal.png')}
      />
      <View style={styles.defaultText}>
        <Text
          style={{
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 18,
            fontWeight: '700',
            color: '#fff',
          }}>
          Make as default
        </Text>
      </View>
      <View style={styles.removeText}>
        <Text
          style={{
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 18,
            fontWeight: '700',
            color: '#000',
          }}>
          Remove
        </Text>
      </View>
      
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
    marginLeft: 120,
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
      width: 30, height: 30,

  },
  image2: {
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      width: 30, height: 30,

  },
  defaultText: {
    width: windowWidth - 60,
    height: 50,
    backgroundColor: '#D35400',
    borderRadius: 30,
    position: 'absolute',
    bottom: 90,
    left: 30,
  },
  removeText: {
    width: windowWidth - 60,
    height: 50,
    backgroundColor: '#ECF0F1',
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    left: 30,
  },
});
