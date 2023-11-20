

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

const ProfLogin = ({ navigation }) => {
  const [cwl, setCwl] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    // You can perform any necessary actions with the form data here
    // For now, let's just log the data to the console
    console.log('CWL:', cwl);
    console.log('Password:', password);

    // Navigate to the next screen
    navigation.navigate('ProfDetails'); // Replace 'NextScreen' with the actual name of the next screen
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.Title}>Professor</Text>
          <Avatar.Image
            size={150}
            source={{ uri: 'https://media.discordapp.net/attachments/1175508031694454804/1175928532711506042/vecteezy_male-teacher-with-book_11378264.jpg?ex=656d03c9&is=655a8ec9&hm=c17c8dc21af34dddad37dfcdcfc3334ba64a0a88255f167e3e5145a499f381b7&=&width=966&height=966' }}
            style={styles.avatar}
          />

          
          <TextInput
            style={styles.input}
            value={cwl}
            onChangeText={(text) => setCwl(text)}
            placeholder="Enter CWL"
          />

          
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter Password"
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
    padding: 0,
    backgroundColor: 'white'
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 65,
  },
  input: {
    height: 45,
    backgroundColor: '#EBEBEB',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    
  },
  Title: {
    textAlign: 'center',
    marginTop: 100,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#141B61',
    fontSize: 32,

  },
  button: {
    backgroundColor: '#141B61',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: "#FAFAFA",
    whiteSpace: "nowrap",
    borderRadius: 10,
    backgroundColor: "#141B61",
    alignItems: "center",
    padding: "13px 20px",
    fontSize: 16,
    lineHeight: 24,

  },
});

export default ProfLogin;