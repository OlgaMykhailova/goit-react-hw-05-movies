import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
display: block;
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color: black;
font-size: 20px;
font-weight: 500;

&.active {
  color: white;
  background-color: orangered;
}`

export const MovieInformation = styled.div`
display: flex;`

export const MovieDecription = styled.div`
padding: 20px;`

export const AddInformation =styled.div`
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;`


