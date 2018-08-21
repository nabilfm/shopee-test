import {bindActionCreators} from 'redux';
import {compose, lifecycle} from 'recompose';
import {connect} from 'react-redux';
import ListConversion from "../components/ListConversion";
import {deleteConversion} from "../actions/Currencies";

function mapStateToProps(state) {
  const {
    listConversion,
    mainConversionValue
  } = state.currency;
  return {
    listConversion,
    mainConversionValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteConversion: bindActionCreators(deleteConversion, dispatch)
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentWillMount(){

    }
  })
)(ListConversion)