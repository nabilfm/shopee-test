import {bindActionCreators} from 'redux';
import {compose, lifecycle, withState, withHandlers} from 'recompose';
import {connect} from 'react-redux';
import NewConversion from "../components/NewConversion";
import {addNewConversion} from "../actions/Currencies";

function mapStateToProps(state) {
  const {
    listConversion,
    rates
  } = state.currency;
  return {
    listConversion,
    rates
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestAddNewConversion: bindActionCreators(addNewConversion,dispatch)
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState('selectedConversion','setSelectedConversion',''),
  withState('addNewConversion','setAddNewConversion',false),
  withState('isDropDownOpen','setDropDownOpen',false),
  withHandlers({
    getDetail: ()=>(type)=>{
      const detail = {
        'USD': 'US Dollar',
        'IDR': 'Indonesian Rupiah',
        'CAD': 'Canadian Dollar',
        'GBP': 'Pound Sterling',
        'CHF': 'Swiss Franc',
        'SGD': 'Singapore Dollar',
        'INR': 'Indian Rupee',
        'MYR': 'Malaysian Ringgit',
        'JPY': 'Japanese Yen',
        'KRW': 'South Korean Won',
      };
      return detail[type] ? detail[type]:'Currency'
    }
  }),
  withHandlers({
    onClickAdd: ({setAddNewConversion})=>()=>{
      setAddNewConversion(true);
    },
    onSelectNewConversion: ({selectedConversion,setSelectedConversion})=>(val)=>{
      setSelectedConversion(val);
    },
    onSubmitNewConversion: ({getDetail, rates, listConversion, setSelectedConversion, setAddNewConversion, selectedConversion, requestAddNewConversion})=>()=>{
      if (selectedConversion === '') {
        return alert('Please choose Conversion first');
      } else {
        let search = listConversion.findIndex(lc=>lc.type===selectedConversion);
        if (search === -1) {
          requestAddNewConversion(
            {
              type: selectedConversion,
              detail: getDetail(selectedConversion),
              val: rates[selectedConversion]
            }
          );
        } else {
          alert('Currency already exists');
        }
        setSelectedConversion('');
        setAddNewConversion(false);
      }
    },
    toggleDropDown: ({setDropDownOpen, isDropDownOpen})=>()=>{
      setDropDownOpen(!isDropDownOpen)
    }
  }),
  lifecycle({
    componentWillMount(){
    }
  })
)(NewConversion)