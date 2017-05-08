//@flow
import { connect } from 'react-redux';
import NavDrawer from '../components/navDrawer';
import { triggerNavDrawer } from '../actions/navDrawer';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => {
    return {
        userData: state.user,
        isOpen: state.navDrawer.isOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        triggerDrawer: () => {
            dispatch(triggerNavDrawer());
        },
        changeView: (path) => {
            dispatch(push(path));
            dispatch(triggerNavDrawer());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavDrawer)