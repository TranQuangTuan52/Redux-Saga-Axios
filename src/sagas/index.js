//lang nghe cac action
import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actionType from '../redux/actions/actionTypes';
import ProductApi from '../api/productApi';
import auth from '@react-native-firebase/auth';

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
function* deleteProduct(props) {
  alert('f')
  try {
    yield call(async () => {
      await ProductApi.delete(props.id);
     // yield put({type: actionType.FETCH_PRODUCTS})
    })
  } catch (error) {
     yield put({type: actionType.DELETE_PRODUCT_FAIL, error})
  }
}

function* signInEmailPassword(props) {
  try {
    yield call(async () => {
      await auth().signInWithEmailAndPassword(props.email, props.password);
    });
    yield put({type: actionType.SIGN_IN_SUCCESS});
  } catch (error) {
    yield put({type: actionType.SIGN_IN_FAIL, error});
    console.log(error);
  }
}

function* signUpEmailPassword(props) {
  try {
    yield call(async () => {
      await auth().createUserWithEmailAndPassword(props.email, props.password);
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
    takeLatest(actionType.DELETE_PRODUCT, deleteProduct)
  ]);

}
export default rootSaga;



//     //fork: non-blocking
//     //take: blocking =>lang nghe dispatch
//     //call: blocking =>doi fetch xong api
//     //put: non-blocking =>dispatch action
// }
