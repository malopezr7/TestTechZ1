import React from 'react';
import PropTypes from 'prop-types';
import {Title} from './styles/Header.styles';

interface HeaderProps {
  title: string;
}

const Header = ({title}: HeaderProps) => <Title>{title}</Title>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
