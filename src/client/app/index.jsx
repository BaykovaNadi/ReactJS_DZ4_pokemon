import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PokemonListContainer from './containers/PokemonListContainer';
import PokemonDescriptionContainer from './containers/PokemonDescriptionContainer';

class App extends Component {
    render() {
        return <div>
                <Header />
                <PokemonListContainer />
                <Footer />
            </div>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));