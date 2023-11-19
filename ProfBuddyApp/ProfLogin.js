import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

function ProfLogin({ navigation }) {
  const [cwl, setCwl] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    // Perform any necessary actions with the form data here
    // For now, let's just log the data to the console
    console.log('CWL:', cwl);
    console.log('Password:', password);

    // Navigate to the next screen
    navigation.navigate('NextScreen'); // Replace 'NextScreen' with the actual name of the next screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Professor</Text>
      </View>

      <View style={styles.imageContainer}>
        {/* Placeholder for an image - replace the source with your actual image */}
        <Image
          source={{ uri: 'https://example.com/your-image.jpg' }}
          style={styles.image}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter CWL</Text>
        <TextInput
          style={styles.input}
          value={cwl}
          onChangeText={(text) => setCwl(text)}
          placeholder="CWL"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    marginTop: 28,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141B61',
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 85,
    aspectRatio: 1,
    width: 170,
    marginTop: 9,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  inputContainer: {
    backgroundColor: '#EDF2F7',
    alignSelf: 'stretch',
    marginBottom: 16,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#141B61',
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: '#141B61',
    padding: 15,
    borderRadius: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfLogin;
