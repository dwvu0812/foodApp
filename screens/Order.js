import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ArrowBack from '../assets/svg/arrow_back_ios.svg';
import Like from '../assets/svg/like.svg';
import Dislike from '../assets/svg/dislike.svg';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;

// const orderList = [
//   {
//     react: 'Like',
//     image: require('../assets/imgs/food1.png'),
//     title: 'Dogmie jagong tutung',
//     likeNumber: '999+',
//     dislikesNumber: '93+',
//     price: '$999',
//   },
//   {
//     react: 'Like',
//     image: require('../assets/imgs/food1.png'),
//     title: 'Dogmie jagong tutung',
//     likeNumber: '999+',
//     dislikesNumber: '93+',
//     price: '$999',
//   },
//   {
//     react: 'Like',
//     image: require('../assets/imgs/food1.png'),
//     title: 'Dogmie jagong tutung',
//     likeNumber: '999+',
//     dislikesNumber: '93+',
//     price: '$999',
//   },
// ];

export default function Order() {
  const orderList = [
    {
      react: 'Like',
      image: require('../assets/imgs/food1.png'),
      title: 'Dogmie jagong tutung',
      likeNumber: '1999+',
      dislikesNumber: '93+',
      price: '$1999',
    },
    {
      react: 'Like',
      image: require('../assets/imgs/food1.png'),
      title: 'Dogmie jagong tutung',
      likeNumber: '999+',
      dislikesNumber: '93+',
      price: '$999',
    },
    {
      react: 'Like',
      image: require('../assets/imgs/food1.png'),
      title: 'Dogmie jagong tutung',
      likeNumber: '999+',
      dislikesNumber: '93+',
      price: '$999',
    },
  ];
  const [data, setData] = useState([...orderList]);

  const ItemFood = ({item, index, onPress}) => {
    const likeStyle = item.react == 'Like' ? styles.orange : {};
    const dislikeStyle = item.react == 'Dislike' ? styles.orange : {};
    const onPressLike = () => {
      onPress(index, 'Like');
    };
    const onPressDislike = () => {
      onPress(index, 'Dislike');
    };
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.itemText}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: '#000',
              lineHeight: 21,
            }}>
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              marginTop: 10,
            }}>
            <Like style={styles.MR10} />
            <Text style={styles.MR10}>
              {item.likeNumber}
              {`|`}
            </Text>
            <Dislike style={styles.MR10} />
            <Text>{item.dislikesNumber}</Text>
          </View>
          <Text style={{color: '#2ECC71'}}>{item.price}</Text>
        </View>
        <TouchableOpacity
          onPress={onPressLike}
          style={[styles.likeBtn, likeStyle]}>
          <Like />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressDislike}
          style={[styles.dislikeBtn, dislikeStyle]}>
          <Dislike />
        </TouchableOpacity>
      </View>
    );
  };

  const onReactPress = (index, type) => {
    const temp = [...data];
    if (type === 'Like') {
      if (temp[index].react == 'Like') {
        temp[index].react = null;
      } else {
        temp[index].react = 'Like';
      }
    }
    if (type === 'Dislike') {
      if (temp[index].react == 'Dislike') {
        temp[index].react = null;
      } else {
        temp[index].react = 'Dislike';
      }
    }
    setData(temp);

  };
  const renderItem = ({item, index}) => {
    return <ItemFood item={item} index={index} onPress={onReactPress} />;
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
        <ArrowBack />
        <Text style={styles.text}>Review food</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <View style={styles.sendText}>
        <Text
          style={{
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 18,
            fontWeight: '700',
            color: '#fff',
          }}>
          Send
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'center',
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
  likeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 55,
    top: 20,
    // backgroundColor: '#D35400',
    padding: 5,
    borderRadius: 10,
  },
  dislikeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    top: 20,
    // backgroundColor: '#D35400',
    padding: 5,
    borderRadius: 10,
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
    marginBottom: 20,
  },
  orange: {
    backgroundColor: '#D35400',
  },
});
