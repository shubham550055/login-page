import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Login';
import Post from './src/Post';

const Stack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#131c2a'},
            headerTitleStyle: {color: '#ffffff', paddingLeft: 80},
            headerTintColor: '#ffffff',
          }}>
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={Login}
          />
          <Stack.Screen
            style={{backgroundColor: 'red'}}
            name="Add Post"
            component={Post}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
