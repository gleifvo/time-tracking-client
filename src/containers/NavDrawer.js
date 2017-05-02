//@flow
import { connect } from 'react-redux';
import NavDrawer from '../components/NavDrawer';
import { triggerNavDrawer } from '../actions/navDrawer';
import { push } from 'react-router-redux';
import { batchActions } from 'redux-batched-actions';

const mapStateToProps = (state) => {
    return { isOpen: state.navDrawer.isOpen };
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