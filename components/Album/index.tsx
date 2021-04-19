import React from 'react'
import { View, Text ,Image,TouchableWithoutFeedback} from 'react-native'
import albumDetails from '../../assets/data/albumDetails'
import styles from './style'
import {Album} from '../../types'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'
export type AlbumProps={
 album:Album
}

export default function AlbumComponent(props:AlbumProps) {

const navigation=useNavigation();
    function onPress(){
navigation.navigate('AlbumScreen',{id:props.album.id})
    }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>

            <Image source={{uri:props.album.imageUri}} style={styles.image}/>
            <Text style={styles.text}>{props.album.artistsHeadline}</Text>

        </View>
        </TouchableWithoutFeedback>
   
    )
}
