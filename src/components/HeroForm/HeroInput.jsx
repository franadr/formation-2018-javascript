import React from 'react';

import './HeroInput.css';

export default class HeroInput extends React.Component {

    handleChange = (event) => {
        const { name, onChange } = this.props;
        const { value } = event.target;
        onChange({ name, value });
    };

    render() {
        const { name, label, type, value, placeholder } = this.props;

        return (
            <div className="hero-input">
                <label htmlFor={name}>{label}</label>
                <input id={name} type={type} onChange={this.handleChange} value={value} placeholder={placeholder} />
            </div>
        )
    }

}