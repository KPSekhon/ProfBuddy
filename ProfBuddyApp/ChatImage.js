import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ChatImage(props) {
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/87673d83-581b-476c-be7d-475032a23892" }}
          style={styles.profileImage}
        />
        <Text style={styles.messageText}>
          Hi Dr. Briggs! I just wanted to express my gratitude for taking
          the time to meet with me on Wednesday. Our coffee chat was
          incredibly insightful, and I appreciate the guidance you provided
          on potential research opportunities in psychology. Additionally, 
          it was so cool to learn that you share the same passion for hiking 
          as I do. I never expected to find someone with such similar interests 
          in the psychology field. It adds a whole new dimension to our 
          conversations in class! If you ever have any hiking recommendations 
          or want to plan a department hiking outing, count me in!
        </Text>
      </View>

      <View style={styles.replyContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fe2a400-9b7d-4a9b-92a9-fd66a91d87e2" }}
          style={styles.profileImage}
        />
        <Text style={styles.replyText}>
          Dr. Ethan Muggs (he/him) • Friday 3:50PM {'\n'}
          You're very welcome! I'm glad you found our chat insightful, and
          it's always a pleasure discussing potential research opportunities 
          with motivated students like yourself. I agree, discovering shared 
          interests like hiking adds a unique element to our interactions. I'm 
          all for a department hiking outing—it sounds like a fantastic idea! 
          I'll definitely keep you posted on that. If you ever have more questions 
          or topics you'd like to discuss, feel free to reach out. Looking 
          forward to the rest of the semester and, hopefully, some hiking 
          adventures in the future!
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Reply</Text>
      </View>
      {/* Bottom Bar Navigation */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Connect')}>
          <Image
            source={{ uri: 'https://media.discordapp.net/attachments/1175508031694454804/1175970488221192262/hacka1.png?ex=656d2adc&is=655ab5dc&hm=614fed921863a4560c9f95a9b7622f9ad3f36692233978ecf66efb695ec6bbe4&=&width=356&height=336' }}
            style={styles.bottomIcon}
          />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
          <Image
            source={{ uri: 'https://media.discordapp.net/attachments/1175508031694454804/1175970116924625006/hacka2.png?ex=656d2a84&is=655ab584&hm=21fa49239d1bc35624ba07992fccf29a985092efa5044c96fe1a04b190cad40e&=&width=292&height=324' }}
            style={styles.bottomIcon}
          />
        
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
          <Image
            source={{ uri: 'https://media.discordapp.net/attachments/1175508031694454804/1175970117188857966/hacka3.png?ex=656d2a84&is=655ab584&hm=af7de674db40aabac15bfab0a7f0f24f56a74c7955e8ab6fb026fff7b8fd7e6a&=&width=340&height=260' }}
            style={styles.bottomIcon}
          />
          
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 35,
    backgroundColor: "#FAFAFA",
    padding: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  replyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  replyText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 20,
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
    justifyContent: 'space-between',
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

export default ChatImage;
