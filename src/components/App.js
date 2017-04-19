//@flow
import React, { Component } from 'react';
import Header from '../containers/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Header />
            </MuiThemeProvider>
        );
    }
}

export default App;