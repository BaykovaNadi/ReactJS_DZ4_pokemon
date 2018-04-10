import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends PureComponent {
    static propTypes = {
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        descriptions: [{
            description: PropTypes.stringisRequired,
            language: PropTypes.stringisRequired
        }],
        onDescriptionClick: PropTypes.func
    };

    static defaultProps = {
        url: 'No url',
        name: 'No name',
        descriptions: [{
            description: 'Info',
            language: 'en'
        }]
    };

    clickHandler = (event) => {
        const { onDescriptionClick, id } = this.props;

        if (typeof onDescriptionClick === 'function') {
            onDescriptionClick(id);
        }
    };

    render() {
        const { url, name, description } = this.props;
        const id = url.split('\/')[6];
        const urlFigure = `https://pokeapi.co//media/img/${id}.png`;
        
        return (
            <div className='image'>
                <p>{name}</p>
                <div onClick={this.clickHandler}>
                    <img src={urlFigure}/>
                </div>
                <div className='info'>{description}</div>
            </div>
        );
    };
}