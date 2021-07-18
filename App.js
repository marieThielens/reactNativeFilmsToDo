import React, { useState } from 'react';
// npm install --save react-native-vector-image

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import VectorImage from 'react-native-vector-image';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import AjouterTache from './src/components/AjouterTache';
import RechercheFilms from './src/containers/RechercheFilms';

// Navigation
const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#00000" : "#FFFFF",
    flex:1
  };

  const [ maListe, setMaListe] = useState([]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />     

      <NavigationContainer>
      <Tab.Navigator initialRouteName={RechercheFilms}>
        <Tab.Screen name="ToDoList" component={AjouterTache} options={{ 
          tabBarIcon : ({ color, size }) => (
              <Ionicons name="alarm" size={size} color={color} />
          ),  }} />

        <Tab.Screen name="Film" component={RechercheFilms} options={{ 
          tabBarIcon : ({ color, size }) => (
            <Ionicons name="play" size={size} color={color} />
          ),  }} />
    {/* <VectorImage source={require('./src/img/horloge.png')} /> */}
      </Tab.Navigator>
    </NavigationContainer>

    </SafeAreaView>
  );
};

export default App;
