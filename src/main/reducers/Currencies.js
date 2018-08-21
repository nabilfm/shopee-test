import {
  ADD_NEW_CONVERSION, DELETE_NEW_CONVERSION, RECEIVE_NEW_MAIN_CONVERSION_VALUE,
  RECEIVE_RATES_LATEST,
  REQUEST_RATES_LATEST
} from "../constants/ActionTypes";

const initialState = {
  isFetching: false,
  rates:{},
  listConversion:[],
  mainConversionValue: 1
};
export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case REQUEST_RATES_LATEST:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_RATES_LATEST:
      console.log(action.data);
      return {
        ...state,
        rates: action.data
      };
    case ADD_NEW_CONVERSION:
      return {
        ...state,
        listConversion: [
          ...state.listConversion,
          action.data
        ]
      };
    case DELETE_NEW_CONVERSION:
      return {
        ...state,
        listConversion: state.listConversion.filter(lc=>lc.type!==action.typeCurrency)
      };
    case RECEIVE_NEW_MAIN_CONVERSION_VALUE:
      return {
        ...state,
        mainConversionValue: action.val
      };
    default:
      return state;
  }
};