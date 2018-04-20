import React from 'react';
import './HeroesList.css';
import HeroItem from '../HeroItem';

import HeroModal from '../HeroModal';

export default class HeroesList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hero: null,
            bounds: null,
            onCloseHandler: null
        };
    }

    handleModal = (hero, bounds, onCloseHandler) => {
        this.setState({ hero, bounds, onCloseHandler });
    };

    handleUpdate = (hero) => {
        const { onUpdate } = this.props;
        const { onCloseHandler } = this.state;
        
        onCloseHandler();
        onUpdate(hero);
    }

    render() {
        const { heroes, heroService } = this.props;
        const { hero, bounds, onCloseHandler } = this.state;
        const isModalOpened = bounds != null;

        return (
            <div className="container">
                { 
                    isModalOpened ? 
                    (
                        <HeroModal 
                            hero={hero} 
                            bounds={bounds} 
                            onUpdate={this.handleUpdate}
                            onCloseHandler={onCloseHandler}>
                            
                            <HeroItem hero={hero} />
                        </HeroModal>
                    ) : ''
                }

                {
                    heroes
                        .filter(({history}) => history)
                        .map((hero, index) => 
                            <HeroItem 
                                key={index} 
                                hero={hero} 
                                heroService={heroService}
                                isModalOpened={isModalOpened} 
                                handleModal={this.handleModal}
                            />
                        )
                }
            </div>
        );
    }

}
