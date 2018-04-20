import React from 'react';

import './MenuBar.css';

export default class MenuBar extends React.Component {

    search = (event) => {
        const { onSearch } = this.props;
        const searchText = event.target.value;
        onSearch(searchText);
    };

    render() {
        const { onAdd } = this.props;

        return (
            <div className="menu-bar">
                <input type="search" onChange={this.search} placeholder="Supergirl"/>
                <button className="add-hero" type="button" onClick={(e) => onAdd()}>+ Ajouter</button>
            </div>
        );
    }

}