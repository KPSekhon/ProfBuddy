import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentDetails from './StudentDetails';
import ProfDetails from './ProfDetails';
import LoadingScreen from './LoadingScreen';
import StudentLogin from './StudentLogin';
import ProfLogin from './ProfLogin';
import NoticeStudent from './NoticeStudent';
import NoticeProf from './NoticeProf';
import NoticeAllSet from './NoticeAllSet';
import Connect from './Connect';
import ChatImage from './ChatImage';
import React from 'react';
import SelectionPage from './SelectionPage';
import ConnectedPage from './ConnectedPage';
import ProfilePage from './ProfilePage';


const Stack = createStackNavigator();

const App = () => {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectionPage">
        <Stack.Screen name="NoticeProf" component={NoticeProf}/>
        <Stack.Screen name="NoticeStudent" component={NoticeStudent}/>
        <Stack.Screen name="ProfLogin" component={ProfLogin}/>
        <Stack.Screen name="ProfDetails" component={ProfDetails}/>
        <Stack.Screen name= "StudentLogin" component={StudentLogin}/>
        <Stack.Screen name="StudentDetails" component={StudentDetails} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="NoticeAllSet" component={NoticeAllSet} />
        <Stack.Screen name="Connect" component={Connect} />
        <Stack.Screen name="ChatImage" component={ChatImage} />
      <Stack.Screen name="SelectionPage" component={SelectionPage}/>
        <Stack.Screen name="ConnectedPage" component={ConnectedPage}/>
        <Stack.Screen name="ProfilePage" component={ProfilePage}/>
        

        {/* Add other screens/routes here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
