import * as actionType from '../actions/actionTypes';
const initState = {  
  isLoading: false,
  loadingData: false,  
  selectedProduct: {}
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SIGN_IN:
      return {...state};
    case actionType.SIGN_IN_SUCCESS:
      return {...state, user: action.user};
    case actionType.SIGN_UP:
      return {...state};
    case actionType.SIGN_UP_SUCCESS:
      alert('success');
      return { ...state, user: action.user };
    case actionType.FETCH_PRODUCTS:
      return { ...state, loadingData: true }
    case actionType.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.products, loadingData: false }
    case actionType.ADD_PRODUCT:
      return { ...state, isLoading: true }
    case actionType.ADD_PRODUCT_SUCCESS:
      alert('xong ne')
      return { ...state, isLoading: false }
    // case actionType.FETCH_PRODUCT:
    //   break;
    case actionType.FETCH_PRODUCT_SUCCESS:
      return { ...state, selectedProduct: action.product }
    case actionType.PUT_PRODUCT_SUCCESS:
      alert('xong goy nek');
      break;
      case actionType.PUT_PRODUCT_FAIL:
        alert(action.error);
        break;
      
    
    
  }
  return state;
};
export default weatherReducer;
