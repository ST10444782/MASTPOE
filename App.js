/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ChefScreen from './ChefScreen';
import FilterScreen from './FilterScreen';

const Stack = createStackNavigator();

const initialMenuItems = [
  { id: 1, dishName: 'Burger', description: 'Delicious beef burger', course: 'Mains', price: 50 },
  { id: 2, dishName: 'Caesar Salad', description: 'Fresh salad with Caesar dressing', course: 'Starters', price: 30 },
  { id: 3, dishName: 'Chocolate Cake', description: 'Rich chocolate cake', course: 'Desserts', price: 25 },
];

export default function App() {
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  const addDish = (newDish) => {
    const dishWithId = { ...newDish, id: menuItems.length > 0 ? menuItems[menuItems.length - 1].id + 1 : 1 };
    setMenuItems([...menuItems, dishWithId]);
  };

  const removeDish = (dishToRemove) => {
    setMenuItems(menuItems.filter(dish => dish.id !== dishToRemove.id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen 
              {...props} 
              menuItems={menuItems} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Chef">
          {(props) => (
            <ChefScreen 
              {...props} 
              menuItems={menuItems} 
              addDish={addDish} 
              removeDish={removeDish} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Filter">
          {(props) => <FilterScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
