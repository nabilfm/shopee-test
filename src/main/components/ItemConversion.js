import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";
import {ListGroupItem} from "reactstrap";
import CurrencyFormat from 'react-currency-format';

const ItemConversion = ({listConversion, mainConversionValue, onClickDelete}) => {
  return listConversion.map((itemC, index)=>
    <ListGroupItem className='d-flex flex-row justify-content-between align-items-center' key={index}>
      <div className='d-flex flex-column col-10 pl-0'>
        <div className='d-flex flex-row justify-content-between'>
          <div>{itemC.type}</div>
          <CurrencyFormat value={mainConversionValue * itemC.val} displayType={'text'} thousandSeparator={true} decimalScale={2} />
        </div>
        <div className='font-italic bold'>{itemC.type} - {itemC.detail}</div>
        <div className='font-italic d-flex flex-row'>
          <div className='mr-1'>1 USD = {itemC.type}</div>
          <CurrencyFormat value={itemC.val} displayType={'text'} thousandSeparator={true} decimalScale={4} />
        </div>
      </div>
      <Button color={'danger'} className='col-2' onClick={()=>onClickDelete(itemC.type)}>-</Button>
    </ListGroupItem>
  )
};

ItemConversion.propTypes= {
  listConversion: PropTypes.array,
  mainConversionValue: PropTypes.number,
  deleteConversion: PropTypes.func
};

export default ItemConversion