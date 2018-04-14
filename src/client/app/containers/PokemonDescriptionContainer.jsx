import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Pokemon from '../components/Pokemon';

export default class PokemonDescriptionContainer extends PureComponent {
    constructor(props) {
    super(props);

    this.state = {
        pokemons: [],
        loading: false
    }
};

resolveDescription(url) {

    const url1 = url.replace('pokemon','characteristic');
    
    console.log(url1);

    fetch(url1)
        .then(response => response.json())
        .then(this.setState({

                loading: false,
                descriptions: descriptions,
            })
        );

    return descriptions;
};
}