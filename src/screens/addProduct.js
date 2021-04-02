import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Button from '../components/button';
import { useNavigation} from '@react-navigation/native'
import * as typeActions from '../redux/actions/actionTypes';
import LoadingModal from '../components/loadingModal';

const image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
const addProduct = () => {
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  // const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>     
      <TextInput
        value={title}
        onChangeText={val => setTitle(val)}
        placeholder="Title"
        style={styles.textInput}
      />
      <TextInput
        value={description}
        onChangeText={val => setDescription(val)}
        placeholder="Description"
        style={styles.textInput}
      />
      <TextInput
        value={price}
        onChangeText={val => setPrice(val)}
        placeholder="Price"
        style={styles.textInput}
      />
      {/* <TextInput onChangeText = {(val)=>setImage(val)} placeholder='ImageURL' style={styles.textInput} /> */}
      <TextInput
        value={category}
        onChangeText={val => setCategory(val)}
        placeholder="Category"
        style={[styles.textInput, {marginBottom: 22}]}
      />
      <Button
        title="Add :3"
        onPress={() => {
          dispatch({
            type: typeActions.ADD_PRODUCT,
            title,
            description,
            image,
            price,
            category,
          });
          dispatch({ type: typeActions.FETCH_PRODUCTS });
          navigation.navigate('Home');
        
        }}
      />
    </View>
  );
};

export default addProduct;

const styles = StyleSheet.create({
  container: {
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
    marginVertical: 2,
  },
});
