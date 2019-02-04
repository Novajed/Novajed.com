import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
  return (
    <div className="animated fadeIn">
      <Wrapper>
        <h1>NOVAJED | DEJAVON</h1>
        <section>
          <p>My name is DJ Lott. There is no better word that summarizes my chief aim than this; actualization. </p>
          <p>
            Every published work and the actions taken to create them are fundamentally motivated by making reality of
            internally generated ideas. That scales anywhere and everywhere.{' '}
          </p>
          <p>My mediums of choice are Front End development, music, and photography. </p>
          <p>
            I'm currently based in Tampa, FL. If you would like to speak about a project, idea, or related matters,
            <a href="mailto:contact@novajed.com">dither not</a>.
          </p>
        </section>
        <div>
          <a href="https://github.com/novajed" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" className="social" />
          </a>
          <a href="https://twitter.com/novajed_" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" className="social" />
          </a>
          <a href="https://www.instagram.com/novajed/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" className="social" />
          </a>
        </div>
        <div className="home animated fadeIn delay-1s">
          <a href="/">← Home</a>
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
  color: #fff;
  text-align: center;

  h1 {
    text-align: center;
  }

  section {
    margin: auto;
    width: 70%;
  }

  .social {
    margin: 5px;
  }

  .home {
    margin-top: 10px;
  }

  p {
    max-width: 100%;
    font-size: 14px;
  }
  a {
    color: white;
    opacity: 0.6;
    transition: 0.3s ease-in-out;
    text-decoration: none;
  }
  a:hover {
    opacity: 1;
  }
`;

export default About;
