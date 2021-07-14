import React from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import monStyle from '../monStyle';
import mesFilms from '../helpers/filmsData';

import FilmItem from '../components/FilmItem';

const Films = () => {    

return (
    <View>
        <Text style={monStyle.titre}>Trouver un film</Text>
        <TextInput style={monStyle.input} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => _loadFilms()}/>

        {/* FlatList permet d'afficher une liste de données  */}
        {/* data = nos items, les données affichées dans la liste */}
        {/* renderitem = rendu visuel */} 
        <FlatList
          data={ mesFilms }
          keyExtractor={(item) => item.id.toString()}
        //   mon component <FilmItem  la var de data = item
          renderItem={({item}) => <FilmItem mesFilms={item}/> }
        />
  </View>
) 

}
export default Films