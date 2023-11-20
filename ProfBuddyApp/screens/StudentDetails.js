// StudentDetails.js
import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

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
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Paul</Text>
      </View>

      <View style={styles.imageContainer}>
        {/* Placeholder for an image - replace the source with your actual image */}
        <Image
          source= {require('./images/studentProfile.jpg')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.editButton}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Enter your year</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>

        <Text style={styles.label}>Enter your major</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={major}
            onChangeText={(text) => setMajor(text)}
          />
        </View>

        <Text style={styles.label}>Enter a field of interest (optional)</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={fieldOfStudy}
            onChangeText={(text) => setFieldOfStudy(text)}
          />
        </View>

        <Text style={styles.label}>Write about yourself here! This helps professors get to know you.</Text>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            value={hobbies}
            onChangeText={(text) => setHobbies(text)}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleSubmit}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    padding: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 20,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 85,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#EDF2F7',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#F7FAFC',
    borderRadius: 35,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#141B61',
    fontSize: 14,
  },
  inputContainer: {
    backgroundColor: '#EDF2F7',
    marginBottom: 15,
    borderRadius: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
  },
  textAreaContainer: {
    backgroundColor: '#EDF2F7',
    marginBottom: 15,
    borderRadius: 5,
  },
  textArea: {
    height: 133,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  nextButton: {
    backgroundColor: '#141B61',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default StudentDetails;