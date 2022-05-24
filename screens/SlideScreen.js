import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const carouselList = [
  {
    image: require('../assets/imgs/chicken.png'),
    title: 'Delicious Food',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: require('../assets/imgs/car.png'),
    title: 'Fast Shipping',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: require('../assets/imgs/medal.png'),
    title: 'Certificate Food',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: require('../assets/imgs/creditcard1.png'),
    title: 'Payment Online',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function SlideScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      <Carousel
        width={windowWidth}
        height={windowHeight}
        autoPlay={true}
        autoPlayInterval={1000}
        data={carouselList}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <Image source={item.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
              
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.skipBtn}
              onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.skipText}>Skip </Text>
              </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D35400',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 30,
    color: '#FFFFFF',
  },
  content: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 20,
    color: '#FFFFFF',
  },
  skipBtn: {
    position: 'absolute',
    // borderWidth: 1,
    // borderColor: '#FFFFFF',
    bottom: 30,
    right: 30,
  },
  skipText: {
    color: '#fff',
    
  }
});
