import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const AddDish = ({ navigation, addDish }) => { // Change here
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const courseOptions = [
    { key: 0, label: 'Starters' },
    { key: 1, label: 'Mains' },
    { key: 2, label: 'Desserts' },
  ];

  const handleAddDish = () => {
    if (dishName && description && course && price) {
      const newDish = {
        dishName,
        description,
        course,
        price: parseFloat(price),
      };
      addDish(newDish);
      navigation.goBack();
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>
      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={styles.input}
        placeholderTextColor="gray"
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        placeholderTextColor="gray"
      />
      <ModalSelector
        data={courseOptions}
        initValue="Select course"
        onChange={(option) => setCourse(option.label)}
        style={styles.modalSelector}
        initValueTextStyle={styles.modalSelectorText}
        selectTextStyle={styles.modalSelectorText}
      />
      <TextInput
        placeholder="Price (R)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
        placeholderTextColor="gray"
      />
      <Button title="Add Dish" onPress={handleAddDish} color="#FF6F61" />
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
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    marginBottom: 20,
    fontSize: 16,
  },
  modalSelector: {
    marginBottom: 20,
  },
  modalSelectorText: {
    color: 'white',
  },
});

export default AddDish;
