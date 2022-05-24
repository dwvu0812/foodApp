import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import ArrowBack from '../assets/svg/arrow_back_ios.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import ButtonCommon from '../components/ButtonCommon';

export default function Information({navigation, route}) {
  useEffect(() => {}, [route.params]);

  const fName = route.params?.fName;
  const lName = route.params?.lName;
  const date = route.params?.date;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate({
            name: 'Profile',
            params: {
                fName,
                lName,
                date
            }
        })}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 20,
        }}>
        <ArrowBack />
        <Text style={styles.text}>My Profile</Text>
      </TouchableOpacity>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Image
          style={styles.img}
          source={require('../assets/imgs/avatar.png')}
        />
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>First Name</Text>
        <View style={styles.item}>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
            {route.params?.fName}
          </Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Last Name</Text>
        <View style={styles.item}>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
            {route.params?.lName}
          </Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Birthday</Text>
        <View style={styles.item}>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
            {route.params?.date}
          </Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Gender</Text>
        <View style={styles.item}>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
            {route.params?.valueG}
          </Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Email</Text>
        <View style={styles.item}>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
            {route.params?.email}
          </Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Location</Text>
        <View style={styles.item}>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
            {route.params?.valueC}
          </Text>
        </View>
      </View>

      {/* {Boolean(error) && <Text style={styles.errorText}>{error}</Text>} */}
      <ButtonCommon
        text="Edit Profile"
        customStyle={{
          position: 'absolute',
          width: '100%',
          bottom: 20,
          left: 20,
        }}
        onPress={() => navigation.navigate('EditProfile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    position: 'relative',
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor: 'red'
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginLeft: 100,
  },
  img: {
    marginTop: 20,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    height: 55,
  },
  itemText: {
    width: '30%',
  },
  item: {
    // backgroundColor: 'red',
    width: '70%',
  },
  itemDropdown: {
    // backgroundColor: 'red',
    width: '70%',
    zIndex: 100,
  },
  errorText: {
    color: 'red',
    marginTop: 20,
  },
});
