
import { useEffect } from 'react';
import { ProfileData } from './constant/data';
import './index.css'

function App() {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu!.classList.toggle("open");
    icon!.classList.toggle("open");
  }

  function printLevelToText(level: number) {
    if (level == 1) return "Basic"
    if (level == 2) return "Intermediate"
    if (level == 3 || level > 3) return "Experienced"
  }

  useEffect(()=>{
    const roles = ["Full Stack Developer ", "Backend Developer ", "Blockchain Developer "];
    let index = 0, charIndex = 0, isDeleting = false;
    function typeEffect(){
      const span = document.getElementById("typed-text");
        let currentRole = roles[index];

        if(!span) return 

        if (isDeleting) {
            span.textContent = currentRole.substring(0, charIndex--);
        } else {
            span.textContent = currentRole.substring(0, charIndex++);
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2000; // Pause after typing full word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect()

  },[])

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">{ProfileData.headerLogoName}</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">{ProfileData.headerLogoName}</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container feature-img">
          <img src="/profile-pic.png" alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">{ProfileData.name}</h1>
          <p className="section__text__p2 typing " id='typed-text'></p>
          <div className="btn-container">
            <a
              className="btn btn-color-2"
              href="/resume.pdf"
              target='_blank'
            >
              Download CV
            </a>
            <a className="btn btn-color-1 hire-btn" href="#contact" >
              Hire Me
            </a>
          </div>
          <div id="socials-container">
            <a href={ProfileData.linked}>
              <img
                src="/linkedin.png"
                alt="My LinkedIn profile"
                className="icon"
              />
            </a>
            <a href={ProfileData.github}>
              <img
                src="/github.png"
                alt="My Github profile"
                className="icon"
              />
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="/about-pic.png"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>{ProfileData.totalExperience} <br />{ProfileData.skill}</p>
              </div>
              <div className="details-container">
                <img
                  src="/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>{ProfileData.education?.map((edu) => <>{edu}<br /></>)}</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                {ProfileData.summary}
              </p>
            </div>
          </div>
        </div>
        <a href="#experience">
          <img
            src="/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
          />
        </a>

      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {
              ProfileData.experience?.map((experience) => {
                return <div className="details-container">
                  <h2 className="experience-sub-title">{experience.title}</h2>
                  <div className="article-container">
                    {
                      experience.skills?.map((skill) => {
                        return (<article>
                          <img
                            src="/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>{skill.name}</h3>
                            <p>{printLevelToText(skill.level)}</p>
                          </div>
                        </article>)
                      })
                    }

                  </div>
                </div>
              })
            }

          </div>
        </div>
        <a href="#projects">
          <img
            src="/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
          />
        </a>
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="/project-1.png"
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Project One</h2>
              <div className="btn-container">
                <a
                  className="btn btn-color-2 project-btn"
                  href="location.href='https://github.com/'"
                >
                  Github
                </a>
                <a
                  className="btn btn-color-2 project-btn"
                  href="https://github.com"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="/project-2.png"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Project Two</h2>
              <div className="btn-container">
                <a
                  className="btn btn-color-2 project-btn"
                  href="location.href='https://github.com/'"
                >
                  Github
                </a>
                <a
                  className="btn btn-color-2 project-btn"
                  href="https://github.com"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="/project-3.png"
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Project Three</h2>
              <div className="btn-container">
                <a
                  className="btn btn-color-2 project-btn"
                  href="location.href='https://github.com/'"
                >
                  Github
                </a>
                <a
                  className="btn btn-color-2 project-btn"
                  href="https://github.com"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="#contact">
          <img
            src="/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
          />
        </a>
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p><a href={`mailto:${ProfileData.email}`}>{ProfileData.email}</a></p>
          </div>
          <div className="contact-info-container">
            <img
              src="/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p><a href={ProfileData.linked}>LinkedIn</a></p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2025 {ProfileData.name}. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
