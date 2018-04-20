import React from 'react';
import './HeroModal.css';

import FullHeroDescription from '../FullHeroDescription';

export default class HeroModal extends React.Component {

    componentWillMount() {
        setTimeout(() => document.body.style.overflow = 'hidden', 1500);
    }

    componentWillUnmount() {
        document.body.style.overflow = 'inherit';
    }

    close = () => {
        this.props.onCloseHandler();
    };

    render() {
        const { bounds } = this.props;

        const modalStyle = { 
            top: bounds.top, 
            left: bounds.left, 
            width: bounds.width, 
            height: bounds.height 
        };

        const { hero, children, onUpdate } = this.props;

        return (
            <div className="modal" style={modalStyle}>
                <div className="modal-thumbnail">{children}</div>

                <div className="modal-content">
                    <button className="modal-close" onClick={this.close}>×</button>
                    <button className="update-hero" type="button" onClick={(e) => onUpdate(hero)}>Update</button>
                    <FullHeroDescription hero={hero} />
                </div>
            </div>
        );
    }

}