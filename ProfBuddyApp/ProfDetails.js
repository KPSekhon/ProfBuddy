import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

function ProfDetails({ navigation }) {
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [classesTaught, setClassesTaught] = useState('');
  const [hobbiesInterests, setHobbiesInterests] = useState('');

  const handleNext = () => {
    // Perform any necessary actions with the form data here
    // For now, let's just log the data to the console
    console.log('Field of Study:', fieldOfStudy);
    console.log('Classes Taught:', classesTaught);
    console.log('Hobbies/Interests:', hobbiesInterests);

    // Navigate to the next screen
    // Replace 'NextScreen' with the actual name of the next screen
    navigation.navigate('LoadingScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ethan</Text>
      </View>

      <View style={styles.avatarContainer}>
        {/* Placeholder for an image - replace the source with your actual image */}
        <Image
          source={{ uri: 'https://media.discordapp.net/attachments/1175508031694454804/1175928712542302288/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg?ex=656d03f4&is=655a8ef4&hm=df0a2f3e0b661cd43d7e55535c1dca20534ac1a25ace6a7bf12ccacf9ae7e0c5&=&width=1450&height=966' }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.editContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fieldOfStudyBox}>
        
        <TextInput
          style={styles.input}
          value={fieldOfStudy}
          onChangeText={(text) => setFieldOfStudy(text)}
          placeholder="Enter Field of Study"
        />
      </View>

      <View style={styles.classesTaughtBox}>
       
        <TextInput
          style={styles.input}
          value={classesTaught}
          onChangeText={(text) => setClassesTaught(text)}
          placeholder="Enter Classes Taught"
        />
      </View>

      <View style={styles.hobbiesInterestsBox}>
       
        <TextInput
          style={styles.input}
          value={hobbiesInterests}
          onChangeText={(text) => setHobbiesInterests(text)}
          placeholder="Enter Hobbies/Interests"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    marginTop: 28,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141B61',
  },
  avatarContainer: {
    overflow: 'hidden',
    borderRadius: 75,
    aspectRatio: 1,
    width: 170,
    marginBottom: 20,
  },
  avatar: {
    flex: 1,
    resizeMode: 'cover',
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B82F6',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  fieldOfStudyBox: {
    alignSelf: 'stretch',
    backgroundColor: '#EDF2F7',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 16,
  },
  classesTaughtBox: {
    alignSelf: 'stretch',
    backgroundColor: '#EDF2F7',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 16,
  },
  hobbiesInterestsBox: {
    alignSelf: 'stretch',
    backgroundColor: '#EDF2F7',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 20,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#374151',
    fontSize: 14,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
  },
  nextButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ProfDetails;
