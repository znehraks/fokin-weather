import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { white } from 'ansi-colors';

export default function Loading(){
    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text>Getting the fucking weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
});