import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {compose, lifecycle, withHandlers} from 'recompose';
import TopSection from "../components/TopSection";
import {getLatestRates, setMainConversionValue} from "../actions/Currencies";

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
    getRates: bindActionCreators(getLatestRates, dispatch),
    setMainConversionValue: bindActionCreators(setMainConversionValue, dispatch)
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    onChange: ({setMainConversionValue})=>(event)=>{
      setMainConversionValue(isNaN(parseInt(event.target.value,10))?0:parseInt(event.target.value,10))
    }
  }),
  lifecycle({
    componentWillMount(){
      this.props.getRates()
    }
  })
)(TopSection)