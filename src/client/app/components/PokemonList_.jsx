import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';

export default class PokemonList extends PureComponent {
    static propTypes = {
        pokemons: PropTypes.arrayOf({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number,
            descriptions: PropTypes.shape({
                description: PropTypes.string,
                language: PropTypes.string
            }),
            onDescriptionClick: PropTypes.func
        })
    };

    static defaultProps = {
        pokemons: []
    };

    constructor(props) {
        super(props);
        
        this.state = {
            descriptions: []
        }
    };

    clickHandle = (description) => {
        const { url, name, id, onDescriptionClick } = this.props;

        if(typeof onDelete === 'function') {
            onDescriptionClick();
          }
    };

    render() {
        const {pokemons} = this.props;
        const { description } = this.state;
        return (
            <div>
                {pokemons.map(pokemon => <Pokemon {...pokemon} onDescriptionClick={this.clickHandle} />)}
            </div>
        );
    }
}    