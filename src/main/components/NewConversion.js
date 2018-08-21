import React from 'react'
import PropTypes from 'prop-types';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle}from 'reactstrap'

const NewConversion =({
                        rates,
                        selectedConversion, onSelectNewConversion,
                        addNewConversion, onClickAdd,
                        onSubmitNewConversion, isDropDownOpen,
                        toggleDropDown,
                      })=>{
  return(
    addNewConversion ?
      <div className='col-12 d-flex justify-content-between py-2'>
            <Dropdown isOpen={isDropDownOpen} toggle={toggleDropDown}>
              <DropdownToggle caret>
                {selectedConversion===''?'Choose Conversion':selectedConversion}
              </DropdownToggle>
              <DropdownMenu>
                {
                  Object.keys(rates).map(rItem=>
                  {
                    return <DropdownItem key={rItem} onClick={()=>{onSelectNewConversion(rItem)}}>{rItem}</DropdownItem>
                  })
                }
              </DropdownMenu>
            </Dropdown>
        <Button color='info' onClick={onSubmitNewConversion}>Submit</Button>
      </div>:
      <div className='d-flex my-2 col-12 justify-content-center align-content-center align-items-center'>
        <Button color={'info'} className='col-10' onClick={onClickAdd}> add more</Button>
      </div>
  )
};

NewConversion.propTypes= {
  rates: PropTypes.object,
  isDropDownOpen: PropTypes.bool,
  addNewConversion: PropTypes.bool,
  onSelectNewConversion: PropTypes.func,
  onSubmitNewConversion: PropTypes.func,
  toggleDropDown: PropTypes.func,
  onClickAdd: PropTypes.func,
  selectedConversion: PropTypes.string,
};

export default NewConversion