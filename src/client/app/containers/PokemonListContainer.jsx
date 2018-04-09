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

        fetch('https://pokeapi.co/api/v2/pokemon/?limit=2')
            .then(response => response.json())
            .then(pokemonsList => {
                this.setState({
                    loading: false,
                    pokemons: pokemonsList.results
                });
            });
            
    }

    onDescriptionClick = (id) => {
        this.setState({
            loading: true,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          });

        // fetch('https://pokeapi.co/api/v2/pokemon/?limit=2')
        //     .then(response => response.json())
        //     .then(pokemonsList => {
        //         this.setState({
        //             loading: false,
        //             pokemons: pokemonsList.results
        //         });
        //     });
        return {
            pokemons, 
            loading: false
        }        
    }
    
    render() {
        const { loading, pokemons} = this.state;
        return (
            <div>
            { loading ? 'Идет загрузка' : <PokemonList onDescriptionClick= {this.onDescriptionClick} pokemons={pokemons} />}
            </div>
        );
    };
}