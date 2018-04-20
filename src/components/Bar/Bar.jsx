import React from 'react';
import './Bar.css';

export default class Bar extends React.Component {

    render() {
        const { value } = this.props;

        return (
            <div className="bar-container">
                <div 
                    className={`bar${value === 100 ? ' bar-full' : ''}`} 
                    style={{ width: `${value}%` }}
                >
                    { value } %
                </div>
            </div>
        );
    }

}