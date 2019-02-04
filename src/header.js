import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';

import Novajed from './images/novajed.png';

function Header() {
  return (
    <Wrapper>
      <Clock className="styledClock" format={'dddd, MMM DD, h:mm A'} ticking={true} timezone={'US/Pacific'} />
      <img src={Novajed} className="animated fadeIn" alt="nova logo" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  text-align: center;
  align-items: center;

  .styledClock {
    color: white;
    align-items: left;
    display: block;
    margin: 10px;
  }
  ul {
    margin: 10;
    padding: 0;
  }
  li {
    display: inline-block;
    margin-left: 20px;
    a {
      text-decoration: none;
      font-size: 20px;
      color: #fff;
    }
  }
  img {
    width: 60px;
    margin: 15px;
  }
`;

const styledClock = styled(Clock)`
  display: inline-block;
`;

export default Header;
