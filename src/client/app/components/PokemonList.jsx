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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    };

    clickHandle = () => {
        const { description } = this.state;
        // this.setState({
        //     description: this.props.description
        // });
        this.setState = this.props;
        console.log ('props', this.props);
    };

    render() {
        const {pokemons} = this.props;
        return (
            <div>
                {pokemons.map(pokemon => <Pokemon {...pokemon} onDescriptionClick={this.clickHandle} />)}
            </div>
        );
    }
}    