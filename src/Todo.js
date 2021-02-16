import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({todo, onRemove}) => {
    const ifLongPress = () => {
        onRemove(todo.id)
    }
    return (
    <TouchableOpacity activeOpacity={0.5} onLongPress={ifLongPress} onPress={() => console.log( 'Pressed', todo.id)}>
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    todo: {
        flexDirection: 'row',
        alignItems:'center',
        padding: 15,
        borderWidth:1,
        borderColor: '#1245',
        borderRadius: 5,
        marginBottom:10,

    }
})