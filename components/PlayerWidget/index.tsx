import React, { useEffect, useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { Song } from '../../types'
import styles from './style'

import Colors from '../../constants/Colors'
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av'
import { Sound } from 'expo-av/build/Audio'
import { TouchableOpacity } from 'react-native-gesture-handler'
// export type PlayerWidgetOProps={
// song:Song
// }

const song = {
    id: '1',
    uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'Chill Beats',
    artist: 'Pratham',
}
export default function PlayerWidget() {

    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [duration, setDuration] = useState<number | null>(null);

    const [position, setPositon] = useState<number | null>(null);
    const onPlayBackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying)
        setDuration(status.durationMillis);
        setPositon(status.positionMillis);
    }


    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }
        const { sound: newSound } = await Sound.createAsync({ uri: song.uri },
            { shouldPlay: isPlaying },
            onPlayBackStatusUpdate
        )
        setSound(newSound)
    }
    useEffect(() => {
        if (song) {
            playCurrentSong();
        }
    }, [song])
    const playPausePress = async () => {
        if (!sound) {
            return;
        }

        if (isPlaying) {
            await sound.pauseAsync();
        }
        else {
            await sound.playAsync();
        }

    }

    if (!song) {
        return null;
    }


    const getProgress = () => {
        if (sound == null || duration == null || position == null) {
            return 0;
        }
        return (position / duration) * 100;
    }
    return (
        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 49, backgroundColor: '#131313', width: '100%', left: 0, right: 0, borderWidth: 3, borderColor: 'black', borderStyle: 'solid' }}>
            {/* Image Cover */}
            <View style={[styles.progress,{width:`${getProgress()}%`}]} />
            <View style={styles.row}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* Title */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Entypo name="dot-single" size={30} color="white" style={{ marginBottom: -5 }} />

                        {/* Artist */}
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 100, justifyContent: 'space-around' }}>
                        <AntDesign name="hearto" color='white' size={24} />
                        <TouchableOpacity onPress={playPausePress}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} color='white' size={24} style={{ fontWeight: 'bold' }} />
                        </TouchableOpacity>
                    </View>
                </View></View>


        </View>
    )
}
