import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import placeImage from './src/assets/beautiful-place.jpg';
import { blue } from 'ansi-colors';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem} >
    <Image
    resizeMode="contain" 
    source={props.placeImage} 
    style={styles.placeImage}/>
    <Text>{props.placeName}</Text>
    </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        margin:5,
        paddingLeft:30,
        padding: 10,
        backgroundColor: '#87cefa',
        borderRadius:5,
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        marginRight: 8,
        height: 40,
        width: 40
    }
});

export default listItem;