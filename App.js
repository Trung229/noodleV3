/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import Welcome from './components/Welcome';
import Info from './components/Info';
import store from './src/app/store';
import Done from './components/Done';
import Error from './components/Error';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
            options={{
              headerShown: false
            }}
              name="Welcome"
              component={Welcome} />
        <Stack.Screen 
            options={{
              headerShown: false
            }} 
            name="Info" 
            component={Info} />
         <Stack.Screen 
            options={{
              headerShown: false
            }} 
            name="Done" 
            component={Done} />
          <Stack.Screen 
            options={{
              headerShown: false
            }} 
            name="Error" 
            component={Error} />     
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};


export default App;
