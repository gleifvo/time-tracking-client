//@flow
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import '../styles/Loading.css'

class Loading extends Component {


    render() {
        return (
            <Dialog
                contentClassName="transparent-dialog"
                style={{
                    textAlign: 'center',
                    zIndex: 1600
                }}
                contentStyle={{
                    backgroundColor: 'transparent'
                }}
                DialogInline={true}
                open={this.props.isActive}>
                <CircularProgress />
            </Dialog>
        );
    }

}

export default Loading;