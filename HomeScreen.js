import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation, menuItems }) => {
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
        keyExtractor={(item) => item.id.toString()} // Unique ID
        renderItem={({ item }) => (
          <Text style={styles.menuItem}>
            {item.dishName} - {item.course} - R{item.price}
          </Text>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No menu items available.</Text>}
      />

      <Button
        title="Manage Menu (Chef)"
        onPress={() => navigation.navigate('Chef')}
        color="#FF6F61"
      />
      <Button
        title="Filter Menu by Course"
        onPress={() => navigation.navigate('Filter')}
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
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  empty: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
