
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Messages = () => {
  const navigation = useNavigation();

  const handleChatClick = () => {
    // Handle clicking on a chat message
    // For now, it just navigates to a dummy ChatDetail page
    navigation.navigate('ChatDetail');
  };

  const handleIconClick = (page) => {
    // Handle clicking on bottom navigation icons
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
      </View>

      {/* Chat Section */}
      <TouchableOpacity style={styles.messageContainer} onPress={handleChatClick}>
        <Image
          source= {require('./images/profProfile.jpg')}
          style={styles.circularImage}
        />
        <View style={styles.messageContent}>
          <Text style={styles.name}>Dr. Ethan Muggs</Text>
          <Text style={styles.lastMessage}>You: Great! See you then!</Text>
        </View>
        <Text style={styles.date}>Fri</Text>
      </TouchableOpacity>



      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => handleIconClick('Connect')} style={styles.bottomIcon}>
          <Image source={require('./images/connectIcon.png')} style={styles.icon} />
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconClick('Messages')} style={styles.bottomIcon}>
          <Image source={require('./images/chatsIcon.png')} style={styles.icon} />
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconClick('ProfilePage')} style={styles.bottomIcon}>
          <Image source={require('./images/settingsIcon.png')} style={styles.icon} />
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFB',
    maxHeight: '99%'
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141B61',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  circularImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  messageContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#141B61',
  },
  lastMessage: {
    fontSize: 14,
    color: '#374151',
  },
  date: {
    fontSize: 12,
    color: '#6B7280',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#EDF2F7',
    alignItems: 'center',
    paddingVertical: 10,
    height: 1070,
  },
  bottomIcon: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
    marginLeft: 30,
  },
  iconText: {
    color: '#6B7280',
    fontSize: 10,
    marginTop: 5,
  },
});

export default Messages;
