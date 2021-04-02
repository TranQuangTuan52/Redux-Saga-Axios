import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/button';
import Loading from '../components/loadingModal';
import {
  StyleSheet,  
  View,
  Image,
  Dimensions,  
  TextInput,
  ScrollView,
} from 'react-native';
import * as actionTypes from '../redux/actions/actionTypes';
const image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
const { width, height } = Dimensions.get('window');

const editProduct = ({route, navigation}) => {
  const selectedProduct = useSelector(state => state.selectedProduct);

  React.useEffect(() => {
    dispatch({type: actionTypes.FETCH_PRODUCT, id: route.params.id});    
  }, []);
  const dispatch = useDispatch();

  const loading = useSelector(state => state.loading)

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(''); 
  const [category, setCategory] = useState('');
  return (
    <ScrollView style = {{ marginVertical: 10}}>
      <View style={styles.constainer}>
        <Image
          source={{uri: selectedProduct?.image}}
          style={{height: height/2, width: width}}  
          resizeMode="cover"
        />
        <TextInput
          value={title}
          onChangeText={val => setTitle(val)}
          placeholder="Title"
          style={[styles.textInput, {marginTop: 14}]}
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
                type: actionTypes.PUT_PRODUCT,
                id: route.params.id,
                title,                
                description,              
                price,
                category,
            });
          }}
        />
      </View>
    </ScrollView>
  );
};

export default editProduct;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height / 2,
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
