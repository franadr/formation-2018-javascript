import React from 'react'
import HeroInput from './HeroInput';
import { formFields, createEmptyHero } from '../../utils/hero.helpers';

import './HeroForm.css';

export default class HeroForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formElements: props.hero ? props.hero : createEmptyHero()
        };
    }

    componentWillMount() {
        setTimeout(() => document.body.style.overflow = 'hidden', 0);
    }

    componentWillUnmount() {
        document.body.style.overflow = 'inherit';
    }

    handleForm = async (event) => {
        event.preventDefault();
        
        const { onClose, heroService, hero } = this.props;
        const { formElements } = this.state;
        const heroInformation = { ...hero, ...formElements };

        if(heroInformation.idHero) {
            await heroService.updateHero(heroInformation);
        } else {
            await heroService.addHero(heroInformation);
        }

        onClose();
    };

    handleChange = ({ name, value }) => {
        const currentFormElements = this.state.formElements;
        const formElement = { [name]: value };

        const newFormElements = { ...currentFormElements,  ...formElement};
        this.setState({ formElements: newFormElements });
    };

    render() {
        const { formElements } = this.state;
        const { onClose, hero } = this.props;

        return (
            <div className="hero-form">
                <form onSubmit={this.handleForm}>
                    <header>
                        <h3>{
                            hero ? 
                                `Update ${formElements.heroName }` :
                                `Add a new hero`
                        }</h3>
                    </header>

                    <main>{
                        formFields.map(({name, label, type, placeholder}, i) => 
                            <HeroInput 
                                key={i} 
                                name={name} 
                                label={label} 
                                type={type} 
                                placeholder={placeholder}
                                value={formElements[name]} 
                                onChange={this.handleChange} 
                            />
                        )
                    }</main>

                    <footer>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </footer>
                </form>
            </div>
        );
    }

}