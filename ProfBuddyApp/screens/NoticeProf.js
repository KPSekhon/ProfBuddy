import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NoticeProf = ({ navigation }) => {
  const handleNext = () => {
    // Navigate to the next screen
    navigation.navigate('ProfLogin');
  };

  return (
    <View style={styles.container}>
      <View style={styles.middleContent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>It’s important to be patient</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.description}>
            Most students you match with will be registered with the UBC Centre of Accessibility. 
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Got it!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 35,
    backgroundColor: "#FAFAFA",
    justifyContent: 'space-between', // This will place the middleContent at the center and button at the bottom
    padding: 10,
  },
  middleContent: {
    flexGrow: 1,
    justifyContent: 'center', // This centers the header and content vertically on the screen
    alignItems: 'center', // This centers the header and content horizontally on the screen
  },
  header: {
    marginBottom: 20, // Add some space between the header and the content
  },
  headerText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 48,
    color: "#131B61",
    paddingHorizontal: 80,
    paddingVertical:20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
    textAlign: 'center',
    paddingHorizontal: 80,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#141B61",
    alignItems: "center",
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 30,
    width: '100%', // Ensure the button stretches full width
    marginBottom: 20, // Keep the button off the very bottom
  },
  buttonText: {
    color: "#FAFAFA",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default NoticeProf;
