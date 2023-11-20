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
        source= {require('./images/studentProfile.jpg')}
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
            source= {require('./images/connectIcon.png')}
            style={styles.bottomIcon}
          />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
          <Image
            source= {require('./images/chatsIcon.png')}
            style={styles.bottomIcon}
          />
        
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
          <Image
            source= {require('./images/settingsIcon.png')}
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
    justifyContent: 'space-around',
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
