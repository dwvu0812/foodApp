import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import ArrowBack from '../assets/svg/arrow_back_ios.svg';
import InputCommon from '../components/InputCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;

export default function ChangePassword({navigation}) {
  // const [username, setUsername] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [renewPwd, setReNewPwd] = useState('');
  const [errorContent, setErrorContent] = useState('');

  const pressBack = () => {
    navigation.navigate('Login');
    // changeScreen('LoginScreen')
  };

  const pressSaveBtn = () => {
    AsyncStorage.getItem('user').then(value => {
      setUsername(value);
      console.log(username)
      AsyncStorage.getItem('account').then(accounts => {
        const listAccount = JSON.parse(accounts);
        console.log(listAccount)
        let currentAccount = listAccount.find(
          account => (account.username == username)
        );
        console.log(currentAccount)

        if (currentAccount.password !== password) {
          setErrorContent('Password is incorrect');
        } else {
          if (newPwd == renewPwd) {
            let newAccount = currentAccount;
            newAccount.password = newPwd;
            let index = listAccount.indexOf(currentAccount);

            if (index !== -1) {
              listAccount[index] = newAccount;
            }

            AsyncStorage.setItem('account', JSON.stringify(listAccount));
            Alert.alert('Success', 'Password changed successfully', [
              {
                text: 'Hoàn thành',
                onPress: pressBack,
              },
            ]);
          } else {
            setErrorContent('Re-new password does not match');
          }
        }

      });
    });
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
      <ScrollView>
        <View
          style={{
            width: itemWidth,
            marginLeft: 30,
            justifyContent: 'flex-start',
            flex: 1,
          }}>
          <Text style={{marginBottom: 15}}>Enter Old Password</Text>
          <InputCommon
            placeholder="Password"
            customStyle={{marginBottom: 25}}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Text style={{marginBottom: 15}}>Create New Password</Text>
          <InputCommon
            placeholder="Enter New Password"
            customStyle={{marginBottom: 20}}
            onChangeText={setNewPwd}
            secureTextEntry={true}
          />
          <InputCommon
            placeholder="Re-enter New Password"
            customStyle={{marginBottom: 25}}
            onChangeText={setReNewPwd}
            secureTextEntry={true}
          />
          {Boolean(errorContent) && (
            <Text style={styles.textErr}>{errorContent}</Text>
          )}
        </View>
        <TouchableOpacity onPress={pressSaveBtn} style={styles.sendText}>
          <Text
            style={{
              textAlign: 'center',
              lineHeight: 50,
              fontSize: 18,
              fontWeight: '700',
              color: '#fff',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // position: 'relative',
  },
  textErr: {
    color: 'red',
    marginTop: 30,
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
    position: 'absolute',
    right: 30,
    top: 20,
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
    marginTop: 250,
  },
});
