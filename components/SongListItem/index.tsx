import React from 'react'
import { View, Text ,Image} from 'react-native'
import {Song} from '../../types'
import styles from './style'
export type SongListItemProps={
song:Song
}
export default function SongListItem(props:SongListItemProps) {
    const {song}=props;
    return (
        <View style={{flexDirection:'row',margin:10}}>
            {/* Image Cover */}

            <Image source={{uri:song.imageUri}} style={styles.image}/>
            {/* Title */}
           
            <View style={{justifyContent:'space-around',marginLeft:20}}>
            <Text style={styles.title}>{song.title}</Text>

            {/* Artist */}
            <Text style={styles.artist}>{song.artist}</Text>
         
            </View>
        </View>
    )
}
