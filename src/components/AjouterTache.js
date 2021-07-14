import React, { useState } from 'react';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import monStyle from '../monStyle';
import mesTodos from '../helpers/toDoData';

const AjouterTache = () => {

    const [ nomTache, setNomTache ] = useState('');
    const [ Description, setDescritpion ] = useState('');

    // Modification des inputs (l'utilisateur commence à taper )
    const auChangementNomTache = ( text ) => {
        setNomTache(text);
    }
    const auChangementNomDescritpion = ( text ) => {
        setDescritpion(text);
    }

    return (
     <View>
         <Text style={monStyle.titre}>Ajouter une tache</Text>
        <TextInput placeholder='Ajouter une tache' onChangeText={auChangementNomTache} style={monStyle.input}/>
        <TextInput placeholder='Description' onChangeText={auChangementNomDescritpion} style={monStyle.input}/>
        <Button title='Ajouter' onPress={() => {}}/>
        
        <FlatList
          data={ mesTodos }
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Text>{item.nom}</Text>}
        />
     </View>   
    )
}

export default AjouterTache;