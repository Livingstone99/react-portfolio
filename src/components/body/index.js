import React from 'react'
import './body.css'
import About from './about/index.js'
import Project from './projects/index'
import Work from './work/index'
import Skill from './skill/index'
import Contact from './contact/index'
import SocialContact from '../../common/social-content'


function Body() {
    return (
      <div className="body">
          <section id="about">
              <About />
          </section>
         
          <section id="project">
              <Project />
          </section>
          <section id="skills">
              <Skill />

          </section>
        
      </div>
    )
}

export default Body
