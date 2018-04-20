import React from 'react';
import './HeroItem.css';

import LightHeroDescription from '../LightHeroDescription';

export default class HeroItem extends React.Component {

    element = null;

    constructor(props) {
        super(props);

        this.state = {
            areDetailsShown: false
        };
    }

    showHeroDetails = async () => {
        const { isModalOpened, heroService, hero, handleModal } = this.props;

        if(isModalOpened || !handleModal) {
            return;
        }

        const heroDetails = await heroService.findById(hero.idHero);

        const { left, width, height } = this.element.getBoundingClientRect();
        const bounds = {
            top: this.element.offsetTop - window.scrollY,
            left,
            width,
            height
        };

        handleModal(
            { ...heroDetails, summaryLength: hero.summaryLength },
            bounds,
            () => {
                handleModal();
                this.setState({ areDetailsShown: false });
            }
        );

        this.setState({ areDetailsShown: true })
    };

    render() {
        const { hero } = this.props;
        const { areDetailsShown } = this.state;

        return (
            <div 
                className={`item${areDetailsShown? ' details': ''}`} 
                ref={(el) => this.element = el}
                onClick={this.showHeroDetails}
            >
                <LightHeroDescription hero={hero}/>
            </div>
        );
    }

}