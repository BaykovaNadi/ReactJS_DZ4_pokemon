import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';

export default class PokemonList extends PureComponent {
    static propTypes = {
        pokemons: PropTypes.arrayOf({
            id: PropTypes.string,
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    };

    static defaultProps = {
        pokemons: [],
    };

    render() {
        const { pokemons } = this.props;
        return (
            <div>
                {pokemons.map(pokemon => <Pokemon {...pokemon} />)}
            </div>
        );
    }
}