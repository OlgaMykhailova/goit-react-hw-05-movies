import styled from 'styled-components';

export const List = styled.ul`

list-style: none;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;`

export const Item = styled.li`
max-width: 250px;
border: 1px dotted grey;`

export const Image = styled.img`
width: 100%;
object-fit: cover;
`

export const CardThumb = styled.div`
height: 100px;
border-top: 1px dotted grey;
padding: 5px;
text-align: center;
background-color: orangered`

export const Text = styled.p`
width: 100%;
color: white;
`