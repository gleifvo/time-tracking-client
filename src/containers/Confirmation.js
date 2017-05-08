//@flow
import { connect } from 'react-redux';
import Confirmation from '../components/confirmation'
import { closeConfirmation } from '../actions/confirmation';

const mapStateToProps = (state) => {
    return state.confirmation
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClose: () => {
            dispatch(closeConfirmation())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Confirmation)