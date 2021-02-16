import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

export const Navbar = (properties) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{properties.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
       height:70, 
       backgroundColor: 'black',
       alignItems:'center',
       justifyContent:'center',
       paddingTop: 15,
       

    },
    text:{
        color:'white',
        fontSize:20,


    }
}) 