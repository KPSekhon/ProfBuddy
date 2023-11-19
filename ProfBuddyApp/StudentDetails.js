// ProfilePage.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const StudentDetails = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Your Name</Title>
      <Avatar.Image
        size={150}
        source={{ uri: 'https://cdna.artstation.com/p/assets/images/images/040/951/926/large/maddie_creates-jj-ver2.jpg?1630351796' }}
        style={styles.avatar}
      />
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph>
            <Text style={styles.label}>Major:</Text> Your Major
          </Paragraph>
          <Paragraph>
            <Text style={styles.label}>Hobbies:</Text> Your Hobbies
          </Paragraph>
          <Paragraph>
            <Text style={styles.label}>Interests:</Text> Your Interests
          </Paragraph>
          <Paragraph>
            <Text style={styles.label}>Field of Study:</Text> Your Field of Study
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  avatar: {
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    width: '80%',
    padding: 15,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default StudentDetails;
