import React, { useEffect } from 'react';
import { Alert, Button, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigation from './navigation/MainNavigation';
export default function App() {
  
  const handlePress = async () => {
    fetch('https://facebook.github.io/react-native/movies.json', {
      // method: 'POST',
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify({
      //   firstParam: 'yourValue',
      //   secondParam: 'yourOthervalue'
      // })
    })
    .then(response => response.json())
    .then(responseJSON => {
      Alert.alert('The fiml at 2nd: ' + responseJSON.movies[1].title)
    })
    .catch(error => {
      console.log(error)
    })
  }
 
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <MainNavigation /> */}
      <Button title='Click' onPress={handlePress}>

      </Button>
    </SafeAreaView>
  );
}

// https://reactnavigation.org/docs/getting-started
//Cài thêm các thư viện này: 
// yarn add @react-native-async-storage/async-storage @react-navigation/bottom-tabs @react-navigation/native @react-navigation/native-stack react-native-paper react-native-safe-area-context react-native-screens react-native-vector-icons
// npx react-native link react-native-vector-icons

//Search toàn bộ project chữ NOTES:
// đó là các điểm a lưu ý