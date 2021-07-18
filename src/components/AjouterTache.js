import React, { useState } from 'react';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import monStyle from '../monStyle';
import mesTodos from '../helpers/toDoData';

const AjouterTache = ( props ) => {

    const [ nomTache, setNomTache ] = useState('');
    const [ Description, setDescritpion ] = useState('');

    // let [ toDoList, setToDoList ] = useState([]);

    const ajouterDansList = () => {
    //    toDoList = [ ...data]
    //     console.log(toDoList)  
    // data = {} 
    console.log(nomTache)
    
    }
   // keyExtractor={(item) => item.id.toString()}
   // data={ mesTodos }
    return (
     <View>
         <Text style={monStyle.titre}>Ajouter une tache</Text>
        <TextInput placeholder='Ajouter une tache' value={nomTache} onChangeText={(text) => setNomTache(text)} style={monStyle.input}/>
        <TextInput placeholder='Description' value={Description} onChangeText={(text) => setDescritpion(text) } style={monStyle.input}/>
        <Button title='Ajouter' onPress={() => { ajouterDansList() }}/>
        
        <FlatList
          data={ mesTodos }
          
          renderItem={({item}) => <Text>{item.nom}</Text>}
        />
     </View>   
    )
}

export default AjouterTache;