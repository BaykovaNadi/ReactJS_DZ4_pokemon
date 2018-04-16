import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';

export default class PokemonList extends PureComponent {
    static propTypes = {
        pokemons: PropTypes.arrayOf({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number,
            // descriptions: PropTypes.shape({
            //     description: PropTypes.string,
            //     language: PropTypes.string
            // }),
            // load: PropTypes.func
        })
    };

    render() {
        const { pokemons,onLoadClick } = this.props;
        return (
            <div>
                <button onClick={onLoadClick}>Load Pokemons</button>
                <ul>
                    {pokemons.map(pokemon => <li>{pokemon.name}</li>)}
                </ul>
            </div>
        );
    }
}    