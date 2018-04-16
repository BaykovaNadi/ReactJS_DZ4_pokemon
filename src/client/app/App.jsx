import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import PokemonList from './components/PokemonList';

class App extends Component {
    render() {
        return <div>
            <Header />
                {/* <Switch>
                <Route exact path="/" component={UserList} />
                </Switch> */}
            <PokemonList />
            <Footer />
            </div>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));