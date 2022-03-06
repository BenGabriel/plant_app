import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PlantAppHome from '../Screens/PlantApp/PlantAppHome';
import PlantDetails from '../Screens/PlantApp/PlantDetails';
import Swipe from '../Screens/SwipeTransition/Swipe';


const Stack = createStackNavigator();


const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PlantAppHome" component={PlantAppHome} />
      <Stack.Screen name="Swipe" component={Swipe} />
      <Stack.Screen name="PlantDetails" component={PlantDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

