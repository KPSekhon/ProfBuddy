import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelectionPage = () => {
  const navigation = useNavigation();

  const handleCardPress = (role) => {
    // You can navigate to the respective pages based on the selected role
    if (role === 'student') {
      navigation.navigate('NoticeStudent');
    } else if (role === 'professor') {
      navigation.navigate('NoticeProf');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Are you a student or a professor?</Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress('student')}
      >
        <Image
          source={require('./images/studentCard.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardLabel}>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress('professor')}
      >
        <Image
          source={require('./images/profCard.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardLabel}>Professor</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#131B61',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#EDF2F7',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 40,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignSelf: 'stretch',
  },
  nextButton: {
    backgroundColor: '#141B61',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default SelectionPage;
