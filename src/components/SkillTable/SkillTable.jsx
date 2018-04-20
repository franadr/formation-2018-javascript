import React from 'react';
import './SkillTable.css';

import Bar from '../Bar';

export default class SkillTable extends React.Component {
    
    skills = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];

    render() {
        const { hero } = this.props;

        return (
            <div className="skill-table">{
                this.skills.map((skill, i) => {
                    return (
                        <div key={i} className="skill-table-row">
                            <div className="capitalize">{skill}</div>
                            <Bar value={hero[skill]} />
                        </div>
                    )
                })
            }</div>
        );
    }

}