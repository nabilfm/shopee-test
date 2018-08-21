import { combineReducers } from 'redux'
import {reducer as currencyReducer} from "./Currencies";

const rootReducers = combineReducers({
  currency: currencyReducer
});

export default rootReducers
