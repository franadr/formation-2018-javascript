import React from 'react';
import './LightHeroDescription.css';

import config from '../../config';

export default class LightHeroDescription extends React.Component {

    render() {
        const { hero } = this.props;

        return (
            <div className="light-description" >
                <header style={{ backgroundImage: `url(${config.url}${hero.imageSrc})` }}>
                    <h2>{hero.heroName}</h2>
                </header>

                <main>
                    <p>{hero.history.substring(0, hero.summaryLength) + '...'}</p>
                </main>
            </div>
        );
    }

}