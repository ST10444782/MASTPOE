
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const Menu = ({ navigation, menuItems }) => {
  const [selectedCourse, setSelectedCourse] = useState('All');

  const courseData = [
    { key: 1, label: 'All' },
    { key: 2, label: 'Starters' },
    { key: 3, label: 'Mains' },
    { key: 4, label: 'Desserts' },
  ];

  const filteredItems = selectedCourse === 'All'
    ? menuItems
    : menuItems.filter(item => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <ModalSelector
        data={courseData}
        initValue="Select a Course"
        onChange={(option) => setSelectedCourse(option.label)}
        style={styles.selector}
      >
        <View style={styles.modalTrigger}>
          <Text style={styles.selectedText}>{selectedCourse}</Text>
        </View>
      </ModalSelector>

      {menuItems.length > 0 ? (
        <FlatList
          data={filteredItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text style={styles.dishName}>{item.dishName} - R{item.price}</Text>
              <Text style={styles.course}>{item.course}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.error}>No menu items available.</Text>
      )}
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
  selector: {
    marginBottom: 20,
  },
  modalTrigger: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  selectedText: {
    color: 'white',
    fontSize: 16,
  },
  menuItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 10,
  },
  dishName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  course: {
    color: 'gray',
    fontSize: 14,
  },
  description: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Menu;