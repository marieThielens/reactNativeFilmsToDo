import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, FlatList} from 'react-native';

import AjouterTache from './src/components/AjouterTache';
import Films from './src/containers/Films';

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

      {/* <Films />

      <AjouterTache/> */}

      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ToDoList" component={AjouterTache} options={{ 
          tabBarIcon : ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          )
           }}/>
        <Tab.Screen name="Film" component={Films} />
      </Tab.Navigator>
    </NavigationContainer>

    </SafeAreaView>
  );
};

export default App;
