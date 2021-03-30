import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Button from  '../components/button'
const addProduct = () => {
    return (
        <View style  = {styles.container}>
            <TextInput placeholder='Title' style={styles.textInput} />
            <TextInput placeholder='Description' style={styles.textInput} />
            <TextInput placeholder='Price' style={styles.textInput} />
            <TextInput placeholder='ImageURL' style={styles.textInput} />
            <TextInput placeholder='Category' style={[styles.textInput, {marginBottom: 22}]} />
            <Button title = 'Add :3' onPress = {()=>{}} />
        </View>
    )
}

export default addProduct

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textInput: {
        width: 250,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        marginVertical: 2
    }
})
