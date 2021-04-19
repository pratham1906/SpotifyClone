import { useRoute } from '@react-navigation/native'
import React,{useEffect} from 'react'
import { View, Text,StyleSheet,FlatList } from 'react-native'
import AlbumHeader from '../components/AlbumHeader/index'
import albumDetails from '../assets/data/albumDetails'
import SongListItem from '../components/SongListItem/index'
export default function AlbumScreen() {
    const route=useRoute();

    useEffect(() => {
      console.log(route);
    }, [])
        return (
        <View>

<FlatList data={albumDetails.songs}
 renderItem={({item})=><SongListItem 
song={item}/>}
keyExtractor={(item)=>item.id}
ListHeaderComponent={()=><AlbumHeader album={albumDetails}/>}/>

        </View>
    )





}



const styles=StyleSheet.create({

})
