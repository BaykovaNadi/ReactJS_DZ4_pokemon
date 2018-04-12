import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokemonList from '../components/PokemonList';

export default class PokemonListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: [],
            loading: false
        }
    };

    componentWillMount() {
        this.setState({
            loading: true
        });

        fetch('https://pokeapi.co/api/v2/pokemon/?limit=15')
            .then(response => response.json())
            .then(pokemonsList => {
                this.setState({
                    loading: false,
                    pokemons: pokemonsList.results
                });
            });
    }
    
    render() {
        const { loading, pokemons} = this.state;
        return (
            <div>
            { loading ? 'Идет загрузка' : <PokemonList pokemons={pokemons}/> }
            </div>
        );
    };
}