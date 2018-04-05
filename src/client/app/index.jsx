import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import PokemonListContainer from './containers/PokemonListContainer';

class App extends Component {
    render() {
        return <div>
                <Header />
                <PokemonList />
                <Footer />
            </div>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));