import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Connect = ({ navigation }) => {
  const handleNext = () => {
    // Navigate to the next screen
    navigation.navigate('ConnectedPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.middleContent}>
        <Text style={styles.headerText}>Connect</Text>
        <Text style={styles.description}>
          Are you ready to connect with a professor?
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Let's do it!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 35,
    backgroundColor: "#FAFAFA",
    alignItems: 'center', // This will center the children horizontally
    justifyContent: 'space-between', // This will place the middleContent at the center and button at the bottom
    padding: 10,
  },
  middleContent: {
    flexGrow: 1,
    justifyContent: 'center', // This centers the text vertically on the screen
    alignItems: 'center', // This centers the text horizontally on the screen
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 48,
    color: "#131B61",
    textAlign: 'center', // Center text horizontally
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
    textAlign: 'center', // Center text horizontally
    paddingHorizontal: 30,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#141B61",
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20,
    width: '80%', // Adjust the width as needed
    marginBottom: 120, // Bottom margin of 120px
  },
  buttonText: {
    color: "#FAFAFA",
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center', // Center text horizontally
  },
});

export default Connect;
