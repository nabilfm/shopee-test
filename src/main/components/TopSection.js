import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopSection.css';
import CurrencyFormat from "react-currency-format";

const TopSection = ({rates, mainConversionValue, onChange}) => {
  return (
    <div className={'top-section'}>
      <div className='currency-type'>USD - United States Dollars</div>
      <div className="main-currency">
        <div className="md-5 bold">USD</div>
        <CurrencyFormat value={mainConversionValue} thousandSeparator={true} decimalScale={4} fixedDecimalScale={true}  onValueChange={(values)=>onChange(values)} />
      </div>
      <div>{JSON.stringify(rates,null,5)}</div>
    </div>
  )
};

TopSection.propTypes = {
  mainConversionValue: PropTypes.number,
  onChange: PropTypes.func,
};

export default TopSection;