import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

const StudentLogin = ({ navigation }) => {
  const [cwl, setCwl] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    // You can perform any necessary actions with the form data here
    // For now, let's just log the data to the console
    console.log('CWL:', cwl);
    console.log('Password:', password);

    // Navigate to the next screen
    navigation.navigate('StudentDetails'); // Replace 'NextScreen' with the actual name of the next screen
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.Title}>Student</Text>
          <Avatar.Image
            size={150}
            source={{ uri: 'https://media.discordapp.net/attachments/1175508031694454804/1175928434317344768/vecteezy_wheelchair-sits-at-a-computer-freelance-deisgner-programmer_13068957.jpg?ex=656d03b2&is=655a8eb2&hm=bcdba00da50562ea9532d61173728ac03526ff90cf76ad3d3685a0b0c5bf38e4&=&width=1410&height=940' }}
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
    borderRadius: 10,
    backgroundColor: "#141B61",
    alignItems: "center",
    padding: "13px 20px",
    fontSize: 16,
    lineHeight: 24,

  },
});

export default StudentLogin;