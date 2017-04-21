//@flow
import { connect } from 'react-redux';
import Loading from '../components/Loading.jsx'

const mapStateToProps = (state) => {
    return state.loading
};

export default connect(
    mapStateToProps,
    null
)(Loading)