import React from 'react'

import { View, Text ,FlatList,SafeAreaView} from 'react-native'
import {Album} from '../../types'
import AlbumComponent from '../Album'
import styles from './styles'

export type AlbumCategoryProps={
    title:string,
albums:[Album]
}
export default function AlbumCategory(props:AlbumCategoryProps) {
    return (
        <SafeAreaView>
        <View style={{marginTop:30}}>
             
            {/* Title Of Category */}
            <Text style={styles.title}>{props.title}</Text>
            {/* List Of Albums */}
            
<FlatList data={props.albums} 
renderItem={({item})=><AlbumComponent album={item}/>}
keyExtractor={(item)=>item.id}
horizontal
showsHorizontalScrollIndicator={false}/>
  
        </View>
      
        </SafeAreaView>
       
    )
}
