//@flow
import { connect } from 'react-redux';
import Loading from '../components/loading'

const mapStateToProps = (state) => {
    return state.loading
};

export default connect(
    mapStateToProps,
    null
)(Loading)