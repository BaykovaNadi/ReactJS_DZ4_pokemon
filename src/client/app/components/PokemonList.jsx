import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';

export default class PokemonList extends PureComponent {
    static propTypes = {
        pokemons: PropTypes.arrayOf({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            descriptions: [{
                description: PropTypes.stringisRequired,
                language: PropTypes.stringisRequired
            }],
            onDescriptionClick: PropTypes.func
        })
    };

    static defaultProps = {
        pokemons: []
    };

    handleDescriptionClick = (id) => {
        const { onDescriptionClick } = this.props;

        if(typeof onDescriptionClick === 'function') {
            onDescriptionClick(id);
          }
    };

    render() {
        const {pokemons} = this.props;
        return (
            <div>
                {pokemons.map(pokemon => <Pokemon {...pokemon} onDescriptionClick={this.handleDescriptionClick} />)}
            </div>
        );
    }
}    