import React from 'react';
import { HeaderContainer, HeaderTitle } from './styled';
import {
  Link
} from "react-router-dom";
const Header = () => (
  <HeaderContainer>
    <HeaderTitle>
      Soccer App
    </HeaderTitle>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul>
    </div>
  </HeaderContainer>
);


export default Header;
