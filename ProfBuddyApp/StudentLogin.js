import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const LoginScreen = () => {
  const [cwl, setCwl] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
            <Text style={styles.Title}>Student</Text>
            <Avatar.Image
                size={150}
                source={{ uri: 'https://cdna.artstation.com/p/assets/images/images/040/951/926/large/maddie_creates-jj-ver2.jpg?1630351796' }}
                style={styles.avatar}
                />

          <Text style={styles.label}>Enter CWL</Text>
          <TextInput 
            style={styles.input} 
            value={cwl} 
            onChangeText={text => setCwl(text)} 
            placeholder="CWL" 
          />

          <Text style={styles.label}>Enter Password</Text>
          <TextInput 
            style={styles.input} 
            value={password} 
            onChangeText={text => setPassword(text)} 
            placeholder="Password" 
            secureTextEntry 
          />

          <TouchableOpacity style={styles.button}>
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
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  Title: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: "blue",
    fontSize: 24,
    lineHeight: 30,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
