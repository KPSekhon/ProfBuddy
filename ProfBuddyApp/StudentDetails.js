import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';

const StudentDetails = ({ navigation }) => {
  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');

  const handleSubmit = () => {
    // You can perform actions with the form data here, like sending it to a server.
    // For now, let's just log the data to the console.
    console.log('Name:', name);
    console.log('Major:', major);
    console.log('Hobbies:', hobbies);
    console.log('Field of Study:', fieldOfStudy);

    // Navigate to the next screen or perform any other actions.
    navigation.navigate('LoadingScreen'); // Replace 'NextScreen' with the actual name of the next screen.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

    <Avatar.Image
        size={150}
        source={{ uri: 'https://cdna.artstation.com/p/assets/images/images/040/951/926/large/maddie_creates-jj-ver2.jpg?1630351796' }}
        style={styles.avatar}
      />

        
      <Text style={styles.title}>Major:</Text>
      <TextInput
        style={styles.input}
        value={major}
        onChangeText={(text) => setMajor(text)}
      />

      <Text style={styles.title}>Hobbies and Interests:</Text>
      <TextInput
        style={styles.input}
        value={hobbies}
        onChangeText={(text) => setHobbies(text)}
      />

      <Text style={styles.title}>Field of Study:</Text>
      <TextInput
        style={styles.input}
        value={fieldOfStudy}
        onChangeText={(text) => setFieldOfStudy(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default StudentDetails;