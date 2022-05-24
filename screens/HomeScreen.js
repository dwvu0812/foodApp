import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ButtonCommon from '../components/ButtonCommon';
import Footer from '../components/Footer';

const windowWidth = Dimensions.get('screen').width;
const itemWidth = windowWidth - 60;

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require('../assets/imgs/hamburger.png')}
        />
        <ButtonCommon
          customStyle={{width: itemWidth, marginBottom: 20}}
          text={'Sign In'}
          onPress={() => navigation.navigate('Login')}
        />
        
        <TouchableOpacity style={styles.textContainer}
        onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.textContent}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    marginTop: 50,
    marginBottom: 50,
  },
  footer: {
    alignItems: 'center',
  },
  textContainer: {
    borderRadius: 30,
    backgroundColor: '#ECF0F1',
    height: 50,
    width: itemWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
});
