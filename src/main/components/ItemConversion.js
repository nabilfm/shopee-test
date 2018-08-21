import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";
import {ListGroupItem} from "reactstrap";

const ItemConversion = ({listConversion, mainConversionValue, onClickDelete}) => {
  return listConversion.map((itemC, index)=>
    <ListGroupItem className='d-flex flex-row justify-content-between align-items-center' key={index}>
      <div className='d-flex flex-column col-10 pl-0'>
        <div className='d-flex flex-row justify-content-between'>
          <div>{itemC.type}</div>
          <div>{itemC.val}</div>
        </div>
        <div className='font-italic bold'>{itemC.type} - {itemC.detail}</div>
        <div className='font-italic'>1 USD = {itemC.type} {mainConversionValue * itemC.val}</div>
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