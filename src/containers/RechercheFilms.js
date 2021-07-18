import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import monStyle from '../monStyle';

import FilmItem from '../components/FilmItem';

import { filmApi } from '../api/FilmApi';

const RechercheFilms = ( ) => { 

const [ films, setFilms ] = useState([]);
const [ inputCherche, setInputCherche] = useState("")
  
const montrerFilms = () => {
    filmApi(inputCherche).then(films => {
      setFilms(films.results) // dans l'api les films sont stoqué dans un tableau results   
    });
  }
 
return (
    <View>
        <Text style={monStyle.titre}>Trouver un film</Text>
        <TextInput style={monStyle.input} placeholder='Titre du film' value={inputCherche} onChangeText={(text) => setInputCherche(text)} />
        <Button title='Rechercher' onPress={montrerFilms}/>

        {/* FlatList permet d'afficher une liste de données  */}
        {/* data = nos items, les données affichées dans la liste */}
        {/* renderitem = rendu visuel */} 
        <FlatList
          data={ films }
          keyExtractor={ (item) => item.id.toString()}
        //   mon component <FilmItem  la var de data = item
          renderItem={({item}) => <FilmItem mesFilms={item}/> }
        />
  </View>
) 

}
export default RechercheFilms