import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import Order from '../screens/Order';
import HomeScreen from '../screens/HomeScreen';
import MyList from '../screens/MyList';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import MyProfile from '../screens/MyProfile';
import ChangePassword from '../screens/ChangePassword';
import PaymentSetting from '../screens/PaymentSetting';
import AddCreditCard from '../screens/AddCreditCard';
import SearchMain from '../screens/SearchMain';
import Paypal from '../screens/Paypal';
import Voucher from '../screens/Voucher';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/SignUp';
import SlideScreen from '../screens/SlideScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FlexBox from '../screens/FlexBox';
import Header from '../components/Header';
//NOTES: File này là settings của navigation

const Tab = createBottomTabNavigator(); //NOTES: Khai báo tabbar
const Stack = createNativeStackNavigator(); //NOTES: Khai báo stack
const Tabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          //NOTES: HIển thị icon ở tabbar
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          }
          else if (route.name === 'My List') {
            iconName = focused ? 'shuffle' : 'shuffle-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="My List" component={MyList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default function MainNavigation() {
  //NOTES: cái này là Navigation của app
  //gồm có tabbar và các màn hình ngoiaf tabbar
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: () => null,
      }}>
        {/* <Stack.Screen name="SlideScreen" component={SlideScreen} /> */}

        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Login" component={LoginScreen} /> 

        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SearchMain" component={SearchMain} />

        <Stack.Screen name="Main" component={Tabbar}/>
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen
          name="FoodDetailScreen"
          component={FoodDetailScreen}
          options={({route}) => ({title: route.params.item.title})}
        />
        <Stack.Screen name="PaymentSetting" component={PaymentSetting} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Voucher" component={Voucher} />
        <Stack.Screen name="AddCreditCard" component={AddCreditCard} />
        <Stack.Screen name="Paypal" component={Paypal} />
        {/* <Stack.Screen name="Information" component={Information} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
