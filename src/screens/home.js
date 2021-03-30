import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as actionTypes from '../redux/actions/actionTypes';
import itemProduct from '../components/itemProduct';
import Button from '../components/button';
import {useNavigation} from '@react-navigation/native';
const home = () => {
  const navigation = useNavigation();
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
    
  React.useEffect(() => {
    dispatch({type: actionTypes.FETCH_PRODUCTS});    
  }, []);

  const renderListProducts = () => {
    return (
      <FlatList
        keyExtractor={item => {
          item.id;
            }}
        keyExtractor = {(item)=>item.id}
        data={products}
        renderItem={(item) => itemProduct(item )}
        showsVerticalScrollIndicator={false}
      />
    );
  };
  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <Button title="Add Category" onPress={() => {navigation.navigate('AddProduct')}} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
