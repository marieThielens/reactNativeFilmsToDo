import React from 'react';
import { View, Text, Image } from 'react-native';
import monStyle from '../monStyle';

const FilmItem = ( film ) => {
  //  console.log(props);  //envoie tout le contenu de filmData
    //const { film } = props;
    return (
        <View style={monStyle.film_container}>
            <Image style={monStyle.image} source={{uri: "image"}} />
            <View style={monStyle.content_container}>
                <View style={monStyle.header_container}>
                    {/* props. mesFilms voir flatlist dans film.js */}
                    <Text style={monStyle.title_text}>{film.mesFilms.title}</Text>
                    <Text style={monStyle.vote_text}>{ film.mesFilms.vote_average}</Text>
                </View>
                <View style={monStyle.description_container}>
                    <Text style={monStyle.description_text} numberOfLines={6}>{film.mesFilms.overview}</Text>
                    {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
                </View>
                <View style={monStyle.date_container}>
                    <Text style={monStyle.date_text}>{film.release_date}</Text>
                </View>
            </View>
        </View>
    )
}

export default FilmItem;