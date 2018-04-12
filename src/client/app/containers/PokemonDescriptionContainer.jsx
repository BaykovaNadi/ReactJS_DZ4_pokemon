import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Pokemon from '../components/Pokemon';

export default class PokemonDescriptionContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            descriptions: [],
            loading: false
        }
    };

    // componentWillMount() {
    //     this.setState({
    //         loading: true
    //     });
}
    
    resolveDescription(url, descriptions) {
        url.replace('pokemon','characteristic');
        
        fetch(url)
        .then(response => response.json())
        .then(this.setState({
                loading: false,
                descriptions: descriptions
            });
        );

        return description;
    }

    render() {
        const { url } = this.props;
        resolveDescription(url, description);

        return (
            <div>
            { loading ? 'Идет загрузка' : <Pokemon {...descriptions}/> }
            </div>
        );
    };
}