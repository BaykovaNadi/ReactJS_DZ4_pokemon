import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PocemonList from './containers/PocemonListContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <PocemonList />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));