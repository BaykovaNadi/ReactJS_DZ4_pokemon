import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends PureComponent {
    static propTypes = {
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number,
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
        language: ' '
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.url.split('\/')[6]
        }
    };

    clickHandle = (event) => {
        const { onDescriptionClick, description } = this.props;

        if (typeof onDescriptionClick === 'function') {
            onDescriptionClick();
        }
    };

    render() {
        const { description } = this.props;
        const { url, name, id } = this.state;

        const urlFigure = `https://pokeapi.co//media/img/${id}.png`;
        
        return (
            <div className='image'>
                <p>{name}</p>
                <div onClick={this.clickHandle}>
                    <img src={urlFigure}/>   
                </div>
                <div className='info'>
                    {description}
                </div>
            </div>
        );
    };
}