import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends PureComponent {
    static propTypes = {
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number,
    };

    static defaultProps = {
        url: 'No url',
        name: 'No name',
        id: 0
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.url.split('\/')[6]
        }
    };

    render() {
        const { url, name, id } = this.state;

        const urlFigure = `https://pokeapi.co//media/img/${id}.png`;
        
        return (
            <div className='image'>
                <p>{name}</p>
                <div>
                    <img src={urlFigure}/>   
                </div>
                <div className='info'>
                    Info
                </div>
            </div>
        );
    };
}