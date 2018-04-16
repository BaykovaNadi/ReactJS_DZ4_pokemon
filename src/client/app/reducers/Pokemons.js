import { handleActions } from 'redux-actions';

import { loadPokemons } from '../actions/pokemons';

const initialState = {
    pokemons: []
};

const reducer = handleActions({
    [loadPokemons]: (state, action) => {
        return {
            pokemons: [
                { url: 'https://pokeapi.co/api/v2/pokemon/1/', 
                name: 'bulbasaur',
                id: 1 },
                { url: 'https://pokeapi.co/api/v2/pokemon/2/', 
                name: 'ivysaur',
                id: 2 },
                { url: 'https://pokeapi.co/api/v2/pokemon/3/', 
                name: 'venusaur',
                id: 3 }
            ]
        }
    }
}, initialState);