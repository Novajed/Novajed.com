import React from 'react';
import styled from 'styled-components';
import { device } from '../devices';

function Home() {
  return (
    <div className="animated fadeIn delay-1s">
      <Wrapper>
        <h1>⎾ Novajed ⏌</h1>
        <section>
          <a href="/about">
            <button>Who is Novajed?</button>
          </a>
          <a href="https://soundcloud.com/novajed/tracks" target="_blank" rel="noopener noreferrer">
            <button>Music</button>
          </a>
          <a href="https://500px.com/novajed" target="_blank" rel="noopener noreferrer">
            <button>Phototgraphy</button>
          </a>
        </section>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 20px;

  text-align: center;

  h1 {
    color: #fff;
    font-size: 42px;
  }

  button {
    font-size: 16px;
    transition: 0.3s ease-in-out;
    cursor: -webkit-grab;
    cursor: grab;
  }

  button:focus {
    outline: 0;
  }

  button:hover {
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
  }

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

export default Home;
