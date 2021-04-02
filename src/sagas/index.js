//lang nghe cac action
import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import * as actionType from '../redux/actions/actionTypes';
import ProductApi from '../api/productApi';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import productApi from '../api/productApi';

function* fetchProducts() {
  try {
    let products;
    yield call(async () => {
      products =  await ProductApi.getAll();    
    });    
    yield put({type: actionType.FETCH_PRODUCTS_SUCCESS, products});
  } catch (error) {
    console.log(error);
    yield put({type: actionType.FETCH_PRODUCTS_FAIL, error});
  }
}

function* putProduct(payload) {  
  const { title, description, price, category } = payload;
  // console.log(payload.id);
  try {
    yield call(async () => {
      await ProductApi.put(id = payload.id, {title, description, price, category});           
    })
    yield put({type: actionType.PUT_PRODUCT_SUCCESS})
  } catch (error) {
    console.log(error)
    yield put({type: actionType.PUT_PRODUCT_FAIL, error})
  }
}

function* deleteProduct(payload) { 
  try {
    yield call(async () => {
      await ProductApi.delete(payload.id);     
    })
    yield put({type: actionType.FETCH_PRODUCTS})
  } catch (error) {
     yield put({type: actionType.DELETE_PRODUCT_FAIL, error})
  }
}

function* addProduct(payload) {
  const { title, description, image, price, category } = payload;
  try {
    yield call(async () => {
      ProductApi.post({ title, description, image, price, category });
    })
    yield put({ type: actionType.FETCH_PRODUCTS });
    yield put({ type: actionType.ADD_PRODUCT_SUCCESS });
  } catch {
    yield put({type: actionType.ADD_PRODUCT_FAIL})
  }
}
function* getProduct(payload) {  
  try {
    let product;
    yield call(async () => {      
      product = await productApi.get(payload.id)       
    })
     yield put({type: actionType.FETCH_PRODUCT_SUCCESS, product})
  } catch (error) {
    yield put({type: actionType.FETCH_PRODUCT_FAIL, error})
  }
}

function* signInEmailPassword(payload) {
  try {
    yield call(async () => {
      await auth().signInWithEmailAndPassword(payload.email, payload.password);
    });
    yield put({type: actionType.SIGN_IN_SUCCESS});
  } catch (error) {
    yield put({type: actionType.SIGN_IN_FAIL, error});
    console.log(error);
  }
}

function* signUpEmailPassword(payload) {
  try {
    yield call(async () => {
      await auth().createUserWithEmailAndPassword(payload.email, payload.password);
    });
    yield put({type: actionType.SIGN_UP_SUCCESS});
  } catch (error) {
    console.log(error);
    yield put({type: actionType.SIGN_UP_FAIL, error});
  }
}


function* rootSaga() {
  yield all([
    takeLatest(actionType.SIGN_IN, signInEmailPassword),
    takeLatest(actionType.SIGN_UP, signUpEmailPassword),
    takeLatest(actionType.FETCH_PRODUCTS, fetchProducts),
    takeEvery(actionType.DELETE_PRODUCT, deleteProduct),
    takeEvery(actionType.ADD_PRODUCT, addProduct),
    takeEvery(actionType.FETCH_PRODUCT, getProduct),
    takeEvery(actionType.PUT_PRODUCT, putProduct)
  ]);
}
export default rootSaga;



//     //fork: non-blocking
//     //take: blocking =>lang nghe dispatch
//     //call: blocking =>doi fetch xong api
//     //put: non-blocking =>dispatch action
// }
