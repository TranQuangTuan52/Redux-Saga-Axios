import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  RefreshControl
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as actionTypes from '../redux/actions/actionTypes';
import {itemStyles} from '../components/itemProduct';
import Button from '../components/button';
import {useNavigation} from '@react-navigation/native';
import Loading from '../components/loadingModal';
import API from "../api/productApi";
const home = () => {
  const loadingData = useSelector(state => state.loadingData)
  const navigation = useNavigation();
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const [a, seta] = useState({})
  React.useEffect(() => {
    // getProduct();
    dispatch({ type: actionTypes.FETCH_PRODUCTS });
    //getProduct()
  }, []);

  // const getProduct = async () => {
  //   let a = await API.put("4", {price: 898989898});
  //   seta(a);
  //   console.log(a);
  // }

  const renderListProducts = () => {
    return (
      <FlatList
        refreshControl={
          <RefreshControl refreshing = {loadingData} onRefresh = {()=>dispatch({type: actionTypes.FETCH_PRODUCTS})} />
        }
        keyExtractor={item => {
          item.id;
        }}
        keyExtractor={item => item.id}
        data={products}
        renderItem={item => itemFlatlist(item)}
        showsVerticalScrollIndicator={false}
      />
    );
  };
  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <Button
          title="Add Category"
          onPress={() => {
            navigation.navigate('AddProduct');
          }}
        />
      </View>
    );
  };

  const itemFlatlist = ({item}) => {
    return (
      <TouchableOpacity onPress  = {()=>{navigation.navigate('EditProduct', {id: item.id})}}
        activeOpacity={0.9} style={itemStyles.container}>
        {/* header */}
        <View style={itemStyles.header}>
          <TouchableOpacity activeOpacity={0.9} style={itemStyles.removeButton} onPress = {()=>dispatch({type: actionTypes.DELETE_PRODUCT, id: item.id})}>
            <Text style={itemStyles.removeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
        <Image
          resizeMode="stretch"
          source={{uri: item.image}}
          style={itemStyles.image}
        />
        {/* footer */}
        <View style={itemStyles.content}>
          <Text style={itemStyles.textTitle}>{item.title}</Text>
          <View style={itemStyles.containerPrice}>
            <Text style={itemStyles.textPrice}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Loading visible = {loadingData} />
      {renderListProducts()}
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: 70,
    backgroundColor: '#bbdefb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default home;
