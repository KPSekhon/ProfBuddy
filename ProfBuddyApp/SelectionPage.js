import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelectionPage = () => {
  const navigation = useNavigation();

  const handleCardPress = (role) => {
    // You can navigate to the respective pages based on the selected role
    if (role === 'student') {
      navigation.navigate('StudentLogin');
    } else if (role === 'professor') {
      navigation.navigate('ProfLogin');
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
          source={{ uri: 'https://media.discordapp.net/attachments/1175508031694454804/1175929819742085221/vibrent_2.png?ex=656d04fc&is=655a8ffc&hm=03d5a1697a3290bf354809c64e901d8bcbbb389287c86f458d33793a96852161&=&width=400&height=400' }}
          style={styles.cardImage}
        />
        <Text style={styles.cardLabel}>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress('professor')}
      >
        <Image
          source={{ uri: 'https://media.discordapp.net/attachments/1175508031694454804/1175929820153131160/vibrent_18.png?ex=656d04fc&is=655a8ffc&hm=93484d0afede43983174ddb1e76858304d8133a0fe5b85a0ae772753de376483&=&width=400&height=400' }}
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
