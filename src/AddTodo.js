import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Button, Alert } from 'react-native'

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
        onSubmit(value)
        setValue('')
        }
        else {
       Alert.alert('Название вашего дела не может быть пустым')
        }
     }
    return (
        <View style={styles.block}>
            <TextInput style={styles.input} autoCorrect={false} onChangeText={setValue} value={value} placeholder='Введите название дела...' />
            <Button title='Добавить' onPress={pressHandler} />
        </View>
        )
}

const styles = StyleSheet.create ({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,

    },
    input: {
        width: '74%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: 'black',
    }
})