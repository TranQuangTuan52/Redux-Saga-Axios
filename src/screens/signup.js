import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { View, Text,TouchableOpacity, TextInput } from 'react-native'
import styles from '../styles/login.styles'
const signup = () => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <TextInput placeholder = 'Email' style={styles.textInput} />
            <TextInput secureTextEntry placeholder='Password' style={styles.textInput} />
            <TextInput secureTextEntry placeholder = 'Confirm Password' style={styles.textInput} />
            <View style = {styles.containerButtons}>
            <TouchableOpacity style={styles.buttonLogin} >
                <Text style = {styles.textButton}>Signup</Text>
            </TouchableOpacity>            
            <TouchableOpacity onPress = {()=>navigation.navigate('Login')}  >
                <Text style = {styles.textSignup}>Have an account? {<Text style = {{color:'#1976d2'}}>Login now!</Text>}</Text>
            </TouchableOpacity>
           </View>
        </View>
    )
}

export default signup
