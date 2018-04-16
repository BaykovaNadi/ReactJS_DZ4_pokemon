import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokemonList from '../components/PokemonList';
import { loadPokemons } from '../actions/pokemons';

class PokemonListContainer extends PureComponent {
    static propTypes = {
        pokemons: PropTypes.arrayOf({
                url: Prop.Types.string, 
                name: PropTypes.string,
                id: PropTypes.number
        }),
        load: PropTypes.func
    }
    
    render() {
        const { pokemons, load} = this.props;
        return (
            <div>
            { <PokemonList onLoadClick={load} pokemons={pokemons} /> }
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load: () => {
            dispatch(loadPokemons());
        }
    }
}

export default connect(mapStateToProps, mapStateToProps)(UserListContainer)