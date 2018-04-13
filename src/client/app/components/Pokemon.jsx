import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends PureComponent {
    static propTypes = {
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number,
        text: PropTypes.string,
        descriptions: PropTypes.shape({
            description: PropTypes.string,
            language: PropTypes.string
        }),
        onDescriptionClick: PropTypes.func
    };

    static defaultProps = {
        url: 'No url',
        name: 'No name',
        id: 0,
        description: 'Info',
        language: ' ',
        text: 'Info'
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.url.split('\/')[6],
            description: this.props.description,
            text: this.props.text,
        }
    };

    clickHandle = (event) => {
        
        const { onDescriptionClick, url, descriptions, text } = this.props;

        // this.setState({
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        //     language: 'en'
        // });
        
        const url1 = url.replace('pokemon','pokemon-form');
    
        fetch(url1)
            .then(response => response.text())
            .then(text => this.setState(
                text: is_battle_only.name
            ));

        console.log('Fired', url1, text);

        // this.setState({
        //     descriptions: resolveDescription(url)
        // });

        if (typeof onDescriptionClick === 'function') {
            onDescriptionClick();
        }
    };

    render() {
        const { id, text } = this.state;
        const { url, name } = this.props;

        const urlFigure = `https://pokeapi.co//media/img/${id}.png`;
        
        return (
            <div className='image'>
                <p>{name}</p>
                <div onClick={this.clickHandle}>
                    <img src={urlFigure}/>   
                </div>
                <div className='info'>
                    {text}
                </div>
            </div>
        );
    };
}