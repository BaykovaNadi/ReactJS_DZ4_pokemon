import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokemonList from '../components/PokemonList';

export default class PokemonListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: [],
            loading: false
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });

        fetch('http://localhost:3000/results')
            .then(res => res.json())
            .then(pokemons => {
                this.setState({
                    loading: false,
                    pokemons
                });
            });
    }

    render() {
        const { loading, pokemons} = this.state;
        return (
            <div>
                { loading ? 'Идет загрузка' : <PokenonList pokemons={pokemons} /> }
            </div>
        );
    }
}