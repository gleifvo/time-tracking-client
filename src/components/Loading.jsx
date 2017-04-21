//@flow
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';

class Loading extends Component {


    render() {
        return (
            <Dialog
                style={{
                    textAlign: 'center'
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