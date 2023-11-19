import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a 2-second loading process
    const timeout = setTimeout(() => {
      // After 2 seconds, navigate to the next screen
      //**NEXT SCREEN should be replaced with the screen that comes after */
      navigation.navigate('NextScreen');
    }, 2000);

    // Clear the timeout to prevent it from triggering if the user leaves the page
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connecting...</Text>

      <ActivityIndicator size="large" color="blue" style={styles.loader} />

      <Text style={styles.message}>
        Feel free to leave, we’ll let you know when we’ve connected you!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Poppins',
  },
  loader: {
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
});

export default LoadingScreen;