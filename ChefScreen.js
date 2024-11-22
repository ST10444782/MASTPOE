import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ChefScreen = ({ navigation, menuItems, addDish, removeDish }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const handleAddDish = () => {
    if (!dishName || !course || !price) {
      alert('Please fill out all required fields!');
      return;
    }
    addDish({ dishName, description, course, price: parseFloat(price) });
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Menu Management</Text>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Course (Starters, Mains, Desserts)"
        value={course}
        onChangeText={setCourse}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Add Dish" onPress={handleAddDish} color="#FF6F61" />
      
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.dishName} - R{item.price}</Text>
            <TouchableOpacity onPress={() => removeDish(item)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
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
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ChefScreen;
