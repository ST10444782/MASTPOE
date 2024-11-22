import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const FilterScreen = ({ navigation, menuItems }) => {
  const [filteredItems, setFilteredItems] = useState(menuItems);

  const filterByCourse = (course) => {
    setFilteredItems(menuItems.filter(item => item.course === course));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>
      <Button title="Show Starters" onPress={() => filterByCourse('Starters')} />
      <Button title="Show Mains" onPress={() => filterByCourse('Mains')} />
      <Button title="Show Desserts" onPress={() => filterByCourse('Desserts')} />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.menuItem}>{item.dishName} - R{item.price}</Text>
        )}
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
  menuItem: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
});

export default FilterScreen;
