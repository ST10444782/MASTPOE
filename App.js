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
import AddDish from './AddDish';
import Menu from './Menu';

const Stack = createStackNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState([]);

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
              addDish={addDish} 
              removeDish={removeDish} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddDish">
          {(props) => (
            <AddDish 
              {...props} 
              addDish={addDish} 
              route={{ ...props.route, params: { addDish } }} // Pass addDish in route.params
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Menu">
          {(props) => <Menu {...props} menuItems={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
