import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopSection.css';

const TopSection = ({rates, mainConversionValue, onChange}) => {
  return (
    <div className={'top-section'}>
      <div className='currency-type'>USD - United States Dollars</div>
      <div className="main-currency">
        <div className="md-5 bold">USD</div>
        <input className="md-5 bold" value={mainConversionValue} onChange={(text)=>onChange(text)}/>
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