import React from 'react';
import './FullHeroDescription.css';

import config from '../../config';
import SkillTable from '../SkillTable';

export default class FullHeroDescription extends React.Component {

    render() {
        const { hero } = this.props;

        return (
            <div className={`full-description ${hero.alignment}`}>
                <header>
                    <div className="full-description-header-column">
                        Gender: {hero.gender}<br />
                        Race: {hero.race}<br />
                        Alignment: {hero.alignment}
                    </div>

                    <div 
                        className="full-description-avatar" 
                        style={{ backgroundImage: `url(${config.url}${hero.imageSrc})` }} 
                    />

                    <div className="full-description-header-column">
                    
                    Hair color: {hero.hairs}<br/>
                    Eye color: {hero.eyes}<br/>
                    Height: {hero.height ? hero.height : '-'}<br/>
                    Weight: {hero.weight ? hero.weight : '-'}
                    </div>
                </header>

                <h2>{hero.heroName}</h2>

                <div className="full-description-details">
                    <div className="full-description-details-column">
                        <h3>Origin story</h3>
                        {hero.history}
                    </div>

                    <div className="full-description-details-column">
                        <h3>True Identity</h3>
                        Fullname: {hero.fullName}<br />
                        Place of birth: {hero.placeOfBirth}<br />
                        Occupation: {hero.occupation}

                        <h3>Skills</h3>
                        <SkillTable hero={hero} />
                    </div>
                </div>
            </div>
        );
    }

}