import React from 'react';
import { HeaderContainer, HeaderContent, Logo } from './Header.styled';
import logo from '../../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <HeaderContainer className='bg-white text-white mb-20'>
      <HeaderContent>
        <Logo src={logo} alt='logo' />
      </HeaderContent>
    </HeaderContainer>
  );
};
export default Header;
