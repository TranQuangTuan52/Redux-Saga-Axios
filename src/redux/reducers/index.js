import * as actionType from '../actions/actionTypes';
const initState = {  
  weather: {
    main: {
      temp: 0
    }
  }
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
    case actionType.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.products }
  }
  return state;
};
export default weatherReducer;
