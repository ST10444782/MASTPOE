// HomeScreen.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation, menuItems, addDish, removeDish }) => {
  const getTotalItems = () => menuItems?.length || 0;

  const getAveragePrice = (course) => {
    if (!menuItems || menuItems.length === 0) return 0;
    const filteredItems = menuItems.filter(item => item.course === course);
    if (filteredItems.length === 0) return 0;
    const total = filteredItems.reduce((sum, item) => sum + item.price, 0);
    return (total / filteredItems.length).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Text style={styles.stat}>Total Menu Items: {getTotalItems()}</Text>
      <Text style={styles.stat}>Average Price for Starters: R{getAveragePrice('Starters')}</Text>
      <Text style={styles.stat}>Average Price for Mains: R{getAveragePrice('Mains')}</Text>
      <Text style={styles.stat}>Average Price for Desserts: R{getAveragePrice('Desserts')}</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.dishName} - R{item.price}</Text>
            <Button title="Remove" onPress={() => removeDish(item)} color="#FF6F61" />
          </View>
        )}
      />

      <Button
        title="Add a new Dish"
        onPress={() => navigation.navigate('AddDish')}
        color="#FF6F61"
      />
      <Button
        title="View Menu"
        onPress={() => navigation.navigate('Menu')}
        color="#FF6F61"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  stat: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dishName: {
    fontSize: 16,
    color: 'white',
  },
});

export default HomeScreen;