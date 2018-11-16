import {
  ADD_NEW_CONVERSION, DELETE_NEW_CONVERSION, RECEIVE_NEW_MAIN_CONVERSION_VALUE,
  RECEIVE_RATES_LATEST,
  REQUEST_ADD_NEW_CONVERSION,
  REQUEST_RATES_LATEST
} from "../constants/ActionTypes";
import axios from 'axios';

export const requestAddNewCurrency=()=>({
  type: REQUEST_ADD_NEW_CONVERSION
});

export const requestGetRatesLatest=()=>({
  type: REQUEST_RATES_LATEST
});

export const receiveRatesLatest=(data)=>({
  type: RECEIVE_RATES_LATEST,
  data
});

export const receiveNewConversion=(data)=>({
  type: ADD_NEW_CONVERSION,
  data
});
export const requestDeleteConversion=(typeCurrency)=>({
  type: DELETE_NEW_CONVERSION,
  typeCurrency
});

export const receiveNewMainConversionValue=(val)=>({
  type: RECEIVE_NEW_MAIN_CONVERSION_VALUE,
  val
});

export const addNewConversion=(data)=>(dispatch)=>{
  dispatch(requestAddNewCurrency());
  dispatch(receiveNewConversion(data))
};

export const getLatestRates=()=>(dispatch)=>{
  dispatch(requestGetRatesLatest());
  return axios.get('https://api.exchangeratesapi.io/latest?base=USD')
    .then(response=>{
      dispatch(receiveRatesLatest(response.data.rates))
    })
    .catch(error=>{
      console.error(error);
    })
};

export const setMainConversionValue=(val)=>(dispatch)=>{
  dispatch(receiveNewMainConversionValue(val))
};

export const deleteConversion =(typeVal)=>(dispatch)=>{
  dispatch(requestDeleteConversion(typeVal))
};
