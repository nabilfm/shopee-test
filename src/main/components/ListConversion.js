import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'reactstrap';
import ItemConversion from "./ItemConversion";

const ListConversion = ({listConversion, mainConversionValue, deleteConversion})=>{
  return (
    <ListGroup className="list-conversion">
      <ItemConversion
        listConversion={listConversion}
        mainConversionValue={mainConversionValue}
        onClickDelete={deleteConversion}
      />
    </ListGroup>
  )
};

ListConversion.propTypes = {
  listConversion: PropTypes.array,
  deleteConversion: PropTypes.func,
  mainConversionValue: PropTypes.number,
};

export default ListConversion;