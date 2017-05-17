import React, { Component } from 'react';
import resume from './resume.json';
import Education from './Education';
import Languages from './Languages';
import Interests from './Interests';
import Experiences from './Experiences';
import Projects from './Projects';
import Skills from './Skills';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
          <div className="profile-container">
            <img className="profile" src={resume.image} alt={resume.name} />
            <h1 className="name">{resume.name}</h1>
            <h3 className="tagline">Developer</h3>
          </div>

          <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
              <li className="email"><i className="fa fa-envelope"></i><a href={"mailto: " + resume.email}>{resume.email}</a></li>
              <li className="phone"><i className="fa fa-phone"></i><a href={"tel: " + resume.phone} >{resume.phone}</a></li>
              <li className="website"><i className="fa fa-globe"></i>
                <a
                  href={resume.website}
                  target="_blank">{resume.author}</a>
              </li>
              <li className="github"><i className="fa fa-github"></i><a href={resume.githubURL} target="_blank">{resume.github}</a></li>
              <li className="twitter"><i className="fa fa-twitter"></i><a href={resume.twitterURL} target="_blank">{resume.twitter}</a></li>
            </ul>
          </div>

          <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            {
              resume.education.map((item, i) => {
                return (<Education item={item} key={i} />);
              })
            }
          </div>

          <div className="languages-container container-block">
            <h2 className="container-block-title">Languages</h2>
            <ul className="list-unstyled interests-list">
              {
                resume.languages.map((item, i) => {
                  return (<Languages item={item} key={i} />);
                })
              }
            </ul>
          </div>

          <div className="interests-container container-block">
            <h2 className="container-block-title">Interests</h2>
            <ul className="list-unstyled interests-list">
              {
                resume.interests.map((item, i) => {
                  return (<Interests item={item} key={i} />);
                })
              }
            </ul>
          </div>

        </div>

        <div className="main-wrapper">

          <section className="section summary-section">
            <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
            <div className="summary">
              <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="https://enqtran.com"
                target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor
                        aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu.</p>
            </div>
          </section>

          <section className="section experiences-section">
            <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
            {
              resume.experiences.map((item, i) => {
                return (<Experiences item={item} key={i} />);
              })
            }
          </section>

          <section className="section projects-section">
            <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
            <div className="intro">
              <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
            </div>

            {
              resume.projects.map((item, i) => {
                return (<Projects item={item} key={i} />);
              })
            }
          </section>

          <section className="skills-section section">
            <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
            <div className="skillset">
              {
                resume.skills.map((item, i) => {
                  return (<Skills item={item} key={i} />);
                })
              }
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
