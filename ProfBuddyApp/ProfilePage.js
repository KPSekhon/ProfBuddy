import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const navigation = useNavigation();

  const [year, setYear] = useState('');
  const [major, setMajor] = useState('');
  const [fieldOfInterest, setFieldOfInterest] = useState('');
  const [aboutYourself, setAboutYourself] = useState('');

  const handleSaveChanges = () => {
    // You can implement logic to save changes here
    // For now, let's just log the data to the console
    console.log('Year:', year);
    console.log('Major:', major);
    console.log('Field of Interest:', fieldOfInterest);
    console.log('About Yourself:', aboutYourself);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Paul</Text>

      {/* Circular Image */}
      <Image
        source={{ uri: 'https://cdn.discordapp.com/attachments/1175508031694454804/1175928662994989086/ethan-rougon-uZBCgRDKsko-unsplash.jpg?ex=656d03e8&is=655a8ee8&hm=64a325c07dff083ae01e5e08dd4c6c81e7eef9b2dc4e6cda3986bfe408fe4db2&' }}
        style={styles.circularImage}
      />

      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>

      {/* Forms */}
      <View style={styles.formContainer}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Year</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={year}
              onChangeText={(text) => setYear(text)}
              placeholder="Enter Year"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Major</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={major}
              onChangeText={(text) => setMajor(text)}
              placeholder="Enter Major"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Field of Interest</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={fieldOfInterest}
              onChangeText={(text) => setFieldOfInterest(text)}
              placeholder="Enter Field of Interest"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>About Yourself</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.largeInput}
              value={aboutYourself}
              onChangeText={(text) => setAboutYourself(text)}
              placeholder="Tell us about yourself"
              multiline
            />
          </View>
        </View>
      </View>

      {/* Save Changes Button */}
      <TouchableOpacity
        style={styles.saveChangesButton}
        onPress={handleSaveChanges}
      >
        <Text style={styles.saveChangesButtonText}>Save Changes</Text>
      </TouchableOpacity>

      {/* Bottom Bar Navigation */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Connect')}>
          <Image
            source={{ uri: 'https://media.discordapp.net/attachments/1175508031694454804/1175970488221192262/hacka1.png?ex=656d2adc&is=655ab5dc&hm=614fed921863a4560c9f95a9b7622f9ad3f36692233978ecf66efb695ec6bbe4&=&width=356&height=336' }}
            style={styles.bottomIcon}
          />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ChatImage')}>
          <Image
            source={{ uri: 'https://media.discordapp.net/attachments/1175508031694454804/1175970116924625006/hacka2.png?ex=656d2a84&is=655ab584&hm=21fa49239d1bc35624ba07992fccf29a985092efa5044c96fe1a04b190cad40e&=&width=292&height=324' }}
            style={styles.bottomIcon}
          />
        
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
          <Image
            source={{ uri: 'https://media.discordapp.net/attachments/1175508031694454804/1175970117188857966/hacka3.png?ex=656d2a84&is=655ab584&hm=af7de674db40aabac15bfab0a7f0f24f56a74c7955e8ab6fb026fff7b8fd7e6a&=&width=340&height=260' }}
            style={styles.bottomIcon}
          />
          
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8FAFB',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141B61',
    marginBottom: 10,
  },
  circularImage: {
    width: 170,
    height: 170,
    borderRadius: 85,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  formContainer: {
    alignSelf: 'stretch',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#141B61',
    fontSize: 14,
    marginBottom: 5,
  },
  inputContainer: {
    backgroundColor: '#EDF2F7',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
  },
  largeInput: {
    height: 100,
  },
  saveChangesButton: {
    backgroundColor: '#141B61',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  saveChangesButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#EDF2F7',
    paddingTop: 20,
  },
  bottomIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
    marginLeft: 30,
  },
  bottomText: {
    textAlign: 'center',
  },
});

export default ProfilePage;
