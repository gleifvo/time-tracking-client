//@flow
import { connect } from 'react-redux';
import Notification from '../components/Notification.jsx'
import { hideNotification } from '../actions/notification';

const mapStateToProps = (state) => {
    return state.notification
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideNotification: () => {
            dispatch(hideNotification())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification)