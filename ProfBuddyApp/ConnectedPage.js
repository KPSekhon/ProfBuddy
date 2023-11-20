import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConnectedPage = () => {
  const navigation = useNavigation();

  const handleSendMessage = () => {
    // Navigate to the page where you can send a message
    navigation.navigate('SendMessagePage');
  };

  return (
    <View style={styles.container}>
      {/* Circular Image at the top */}
      <Image
        source={{ uri: 'https://media.discordapp.net/attachments/1175508031694454804/1175928712542302288/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg?ex=656d03f4&is=655a8ef4&hm=df0a2f3e0b661cd43d7e55535c1dca20534ac1a25ace6a7bf12ccacf9ae7e0c5&=&width=1450&height=966' }}
        style={styles.circularImage}
      />

      {/* Connected text */}
      <Text style={styles.connectedText}>Connected!</Text>

      {/* Main text */}
      <Text style={styles.mainText}>
        Hi Paul. We’ve connected you with Dr. Ethan Muggs. Send them a message to begin your networking journey.
      </Text>

      {/* Send Message button */}
      <TouchableOpacity
        style={styles.sendMessageButton}
        onPress={handleSendMessage}
      >
        <Text style={styles.sendMessageButtonText}>Send Message</Text>
      </TouchableOpacity>
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
  circularImage: {
    width: 170,
    height: 170,
    borderRadius: 85,
    marginBottom: 30,
  },
  connectedText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141B61',
    marginTop: 12,
  },
  mainText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#374151',
    marginTop: 10,
    marginBottom: 30,
    alignSelf: 'stretch',
  },
  sendMessageButton: {
    backgroundColor: '#141B61',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignSelf: 'stretch',
  },
  sendMessageButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ConnectedPage;
