import {
  View,
  Text,
  StyleSheet,
  Alert,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
const screenWidth = Dimensions.get('screen').width;

import InputCommon from '../components/InputCommon';
import ButtonCommon from '../components/ButtonCommon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArrowBack from '../assets/svg/arrow_back_ios.svg';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkButtonLogin, setCheckButtonLogin] = useState(true);
  const [isErrorWrongUsernameOrPass, setIsErrorWrongUsernameOrPass] =
    useState(false);
  useEffect(() => {
    if (username.length > 5 && password.length > 5) {
      setCheckButtonLogin(false);
    } else {
      setCheckButtonLogin(true);
    }
    setIsErrorWrongUsernameOrPass(false);
  }, [username, password]);

  useEffect(() => {
    // Alert.alert('Welcome back');
  }, []);

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View
        style={{
          justifyContent: 'flex-start',
          width: '100%',
          marginLeft: 30,
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ArrowBack />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.textSignIn}>Sign In</Text>
        <InputCommon
          placeholder={'Username'}
          value={username}
          onChangeText={text => setUsername(text)}
          customStyle={styles.styleMB20}
        />
        <InputCommon
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder={'Password'}
          customStyle={
            isErrorWrongUsernameOrPass ? {marginBottom: 10} : styles.styleMB30
          }
        />
        {isErrorWrongUsernameOrPass && (
          <Text style={[styles.textErr, styles.styleMB30]}>
            Username or password is not correct
          </Text>
        )}
        <ButtonCommon
          text={'Sign In'}
          disabled={checkButtonLogin}
          onPress={() => {
            AsyncStorage.getItem('account').then(accounts => {
              const listAccount = JSON.parse(accounts);
              const check = listAccount.some(
                item => item.username == username && item.password == password,
              );
              // check login dung hay sai

              if (check) {
                AsyncStorage.setItem('user', username);
                navigation.navigate('Main');
                // changeScreen('MainScreen');
              } else {
                setIsErrorWrongUsernameOrPass(true);
              }
            });
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Text
            onPress={() => {
              Alert.alert('Forgot Password');
            }}
            style={{textAlign: 'right'}}>
            Forgot Password
          </Text>
        </View>
      </View>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  styleMB30: {
    marginBottom: 30,
  },
  styleMB20: {
    marginBottom: 20,
  },
  body: {
    width: screenWidth - 60,
  },
  textSignIn: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 30,
    color: 'black',
  },
  textErr: {
    fontSize: 14,
    color: 'red',
  },
});
