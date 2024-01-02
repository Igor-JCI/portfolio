import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>

            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.header`
  background-color: green;
  display: flex;
  justify-content: space-between;
`