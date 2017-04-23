//@flow
import React, { Component } from 'react';
import Header from '../containers/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loading from '../containers/Loading';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Loading />
                    <Header />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;