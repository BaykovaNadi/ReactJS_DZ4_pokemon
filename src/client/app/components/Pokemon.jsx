import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }
};

render() {
    const { url, name } = this.props;
    const urlPicture = 'https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/';
    return (
        <div>
            {name}
            <img src="`&{urlPicture} &{id} '.png'`" alt="{name}"/>
        </div>
    );
}