import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
const button = ({ onPress, title }) => {
    
    return (
        <TouchableOpacity activeOpacity = {0.9} style = {styles.container} onPress = {onPress}>
            <Text style = {styles.buttonText}>{ title}</Text>
        </TouchableOpacity>
    )
}

export default button

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 50,
        backgroundColor: '#f44336',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
})
