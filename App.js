import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigation from './navigation/MainNavigation';
export default function App() {
  
  // useEffect(() => {
  //   AsyncStorage.getItem('user').then(user => user && setState('MainScreen'))
  // }, [])
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigation />
    </SafeAreaView>
  );
}

// https://reactnavigation.org/docs/getting-started
//Cài thêm các thư viện này: 
// yarn add @react-native-async-storage/async-storage @react-navigation/bottom-tabs @react-navigation/native @react-navigation/native-stack react-native-paper react-native-safe-area-context react-native-screens react-native-vector-icons
// npx react-native link react-native-vector-icons

//Search toàn bộ project chữ NOTES:
// đó là các điểm a lưu ý