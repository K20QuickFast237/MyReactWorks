import React from 'react'
import { Link } from "react-router-dom";
import { styled } from 'styled-components';
import DarkLogo from '../../assets/dark-logo.png';
import { StyledLink } from '../../utils/style/Atoms';

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HomeLogo = styled.img`
  height: 70px;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={DarkLogo} />
      </Link>
      <div>
        <StyledLink to={"/"}>Acceuil</StyledLink>
        {/* la prop avec $ est utilisée par styled-components pour le style 
        et n'est pas renvoyée vers le DOM .
        Cela n'est utilisé qu'avec les composants React. Pour les autres, le $ n'est pas nçessaire */}
        <StyledLink to={"/freelances"}>Profils</StyledLink>
        <StyledLink to={"/survey/1"} $isFullLink>Faire le test</StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header