import * as React from 'react';
import { StyleSheet ,SafeAreaView,FlatList} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Album from '../components/Album/index'
import albumDetails from '../assets/data/albumDetails'
import albumCategories from '../assets/data/albumCategories'
import AlbumCategory from '../components/AlbumCategory/index'




export default function HomeScreen() {
  return (

    <View style={styles.container}>
     {/* <Album album={albumDetails}/> */}
<FlatList data={albumCategories} renderItem={({item})=><AlbumCategory title={item.title} albums={item.albums}/>}
keyExtractor={(item)=>item.id}/>
    </View>
   
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  justifyContent:'center',
  alignItems:'center'
  }
});
