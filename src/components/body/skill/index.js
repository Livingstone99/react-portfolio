import React from 'react'
import Separator from '../../../common/social-content/seperator'
import { SkillData } from '../../../data/skills'
import SkillCard from './skill-card';
import './skill-card.css'
import './skill.css'
function Skill() {
    const data = SkillData;
    return (
        <div className="skills">
            <Separator />
            <label className="section-title">
                Skills
            </label>
            <div className="skills-container">
                {data.map((item)=>{
                    return (
                        <div className="skill-section">
                            <label htmlFor="" className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill)=> {
                                    return (
                                        <div>
                                        <SkillCard skill={skill} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skill
