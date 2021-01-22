import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Block,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';
import IndexScreen from './src/screens/Index';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="LoginScreen"
            screenOptions={{
              headerShown: false}}>
          <Stack.Screen name="LoginScreen" component={Login}/>
          <Stack.Screen name="IndexScreen" component={IndexScreen}   options={{
                gestureEnabled: false,
              }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};



export default App;
