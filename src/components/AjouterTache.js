import React, { useState } from 'react';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import monStyle from '../monStyle';
import mesTodos from '../helpers/toDoData';

const AjouterTache = () => {

    const [ nomTache, setNomTache ] = useState('');
    const [ Description, setDescritpion ] = useState('');
    const [ toDoList, setToDoList ] = useState([]);

    // const ajouterDansList = (value) => {
    //     setToDoList((essais) => [value, ...value]);
        
    // }

   // data={ mesTodos }
    return (
     <View>
         <Text style={monStyle.titre}>Ajouter une tache</Text>
        <TextInput placeholder='Ajouter une tache' onChangeText={(text) => setNomTache(text)} style={monStyle.input}/>
        <TextInput placeholder='Description' onChangeText={(text) => setDescritpion(text) } style={monStyle.input}/>
        <Button title='Ajouter' onPress={() => { ajouterDansList(mesTodos) }}/>
        
        <FlatList
          data={ mesTodos }
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Text>{item.nom}</Text>}
        />
     </View>   
    )
}

export default AjouterTache;