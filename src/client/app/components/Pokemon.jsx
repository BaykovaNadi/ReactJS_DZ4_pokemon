import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends PureComponent {
    static propTypes = {
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    };

    render() {
        const { url, name } = this.props;
        const id = url.split('\/')[6];
        const urlFigure = `https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/${id}.png`;

        return (
            <div>
                {name}
                <img src="{urlFigure}" alt="{name}"/>
            </div>
        );
    }
}