import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { BasketProvider } from "./Context"; // Ensure correct import
import VegetableListVendor from './screens/VegetableListVendor'; // Home screen
import CurrentOrder from './screens/currentOrder'; // Track Current Orders screen
import OrderHistory from './screens/orderHistory'; // Past Orders screen
import RateOrder from './screens/RateOrder';
import OrderConfirmation from './orderConfirmation';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { IconButton } from 'react-native-paper'; // Import IconButton

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Track Orders') {
            iconName = focused ? 'time' : 'time-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Past Orders') {
            iconName = 'history';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={VegetableListVendor}  />
      <Tab.Screen name="Track Orders" component={CurrentOrder} />
      <Tab.Screen name="Past Orders" component={OrderHistory} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <BasketProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Main Tab Navigator */}
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{ headerShown: false }} 
          />

          <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} options={{headerLeft: null }} />

          <Stack.Screen
            name="RateOrder"
            component={RateOrder}
            options={({ navigation }) => ({
              title: 'Rate your Order',
              headerLeft: () => (
                <IconButton
                  icon="arrow-left"
                  onPress={() => navigation.goBack()} 
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </BasketProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
