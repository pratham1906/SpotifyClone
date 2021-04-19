import React from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'
import albumCategories from '../../assets/data/albumCategories'

import {Album} from '../../types'
import styles from './style'
export type AlbumHeaderProps={
    album:Album;
}
export default function AlbumHeader(props:AlbumHeaderProps) {
    const {album}=props;
    return (
        <View style={styles.container}>
      <Image source={{uri:album.imageUri}} style={styles.image}/>
      <Text style={styles.name}>{album.name}</Text>
      <View style={{flexDirection:'row',margin:10}}>
<Text style={styles.likes}>{album.numberOfLikes}</Text>
<Text style={styles.by}>{album.by}</Text>
      </View>


      <TouchableOpacity>
          <View style={styles.play}>
<Text style={styles.buttonText}>PLAY</Text>
</View>
      </TouchableOpacity>
        </View>
    )
}
