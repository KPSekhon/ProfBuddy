import { createStackNavigator } from '@react-navigation/stack';
import StudentDetails from './screens/StudentDetails';
import ProfDetails from './screens/ProfDetails';
import LoadingScreen from './screens/LoadingScreen';
import StudentLogin from './screens/StudentLogin';
import ProfLogin from './screens/ProfLogin';
import NoticeStudent from './screens/NoticeStudent';
import NoticeProf from './screens/NoticeProf';
import NoticeAllSet from './screens/NoticeAllSet';
import Connect from './screens/Connect';
import ChatImage from './screens/ChatImage';
import SelectionPage from './screens/SelectionPage';
import ConnectedPage from './screens/ConnectedPage';
import ProfilePage from './screens/ProfilePage';
import Messages from './screens/Messages';

const StackNavigation = () =>{
    const Stack = createStackNavigator();
    return (
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
            <Stack.Screen name="Messages" component={Messages}/>
    
            {/* Add other screens/routes here */}
          </Stack.Navigator>
      );
}

export default StackNavigation;