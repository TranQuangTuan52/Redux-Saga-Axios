import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/login.styles';
import auth from '@react-native-firebase/auth';
import * as actionTypes from '../redux/actions/actionTypes';
const login = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function onAuthStateChanged(user) {
    // const state = useSelector(state => state);

    setUser(user);
    if (initializing) setInitializing(false);
  }

  //   useEffect(() => {
  //     //console.log({state});
  //   }, [state]);

  useEffect(() => {
    //console.log(auth().currentUser)
    const subcriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subcriber;
  }, []);

  if (initializing) return null;
  if (user) navigation.navigate('Home');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        onChangeText={val => setEmail(val)}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        style={styles.textInput}
        onChangeText={val => setPassword(val)}
      />
      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            dispatch({type: actionTypes.SIGN_IN, email, password});
          }}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate('Signup')}
          onPress={() => {
            dispatch({type: actionTypes.SIGN_UP, email, password});
          }}>
          <Text style={[styles.textSignup, {color: 'gray'}]}>
            Dont't have an account?{' '}
            {<Text style={{color: '#1976d2'}}>Signup</Text>}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default login;
