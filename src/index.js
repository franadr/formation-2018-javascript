import React from 'react';
import ReactDOM from 'react-dom';
import HeroesContainer from './components/HeroesContainer';
import heroService from './services/hero.service';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HeroesContainer heroService={heroService} />, document.getElementById('root'));
registerServiceWorker();
