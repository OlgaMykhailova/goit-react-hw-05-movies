import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
display: block;
padding: 8px 8px;
border-radius: 4px;
text-decoration: none;
color: black;


&:hover {
  color: white;
  background-color: orangered;
}`