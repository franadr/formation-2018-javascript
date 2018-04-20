import React from 'react';
import MenuBar from '../MenuBar';
import HeroesList from '../HeroesList';
import HeroForm from '../HeroForm';

export default class HeroesContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            heroes: [],
            filteredHeroes: [],
            isFormVisible: false,
            selectedHero: null
        };
    }    

    componentDidMount() {
        this.loadHeroes();
    }

    loadHeroes = async () => {
        const { heroService } = this.props;
        const heroes = await heroService.getHeroes();
        this.setState({ heroes, filteredHeroes: heroes });
    }

    filterHeroes = (searchText) => {
        const { heroes } = this.state;
        const filteredHeroes = heroes.filter(({ heroName }) => {
            const lowerheroName = heroName.toLowerCase();
            const lowerSearchText = searchText.toLowerCase();

            return lowerheroName.indexOf(lowerSearchText) !== -1;
        });

        this.setState({ filteredHeroes });
    };

    showForm = (hero) => {
        this.setState({ isFormVisible: true, selectedHero: hero });
    };

    closeForm = () => {
        this.setState({ isFormVisible: false });
        this.loadHeroes();
    };

    render() {
        const { heroService } = this.props;
        const { filteredHeroes, isFormVisible, selectedHero } = this.state;

        return (
            <div>
                <MenuBar onSearch={this.filterHeroes} onAdd={this.showForm}/>
                <HeroesList 
                    heroes={filteredHeroes} 
                    heroService={heroService}
                    onUpdate={this.showForm} />
                
                { isFormVisible ? 
                    <HeroForm 
                        heroService={heroService} 
                        hero={selectedHero} 
                        onClose={this.closeForm}
                    />  : '' 
                }
            </div>
        );
    }

}