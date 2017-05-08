//@flow
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Confirmation extends React.Component {
    render() {
        const actions = [
            <FlatButton
                label={this.props.confirmLabel || 'Cofirm'}
                primary={true}
                onTouchTap={this.props.handleConfirm}
            />,
            <FlatButton
                label={this.props.discardLabel || 'Discard'}
                primary={true}
                onTouchTap={this.props.handleClose}
            />
        ];

        return (
            <div>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.props.open}
                    onRequestClose={this.props.handleClose}>
                    <h3 style={{
                        textAlign: 'center'
                    }}>{this.props.message || 'Confirm action?'}</h3>
                </Dialog>
            </div>
        );
    }
}

export default Confirmation;