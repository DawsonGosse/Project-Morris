import styled from 'styled-components';
import * as React from 'react';


const Container = styled.div`
display:flex;
width:30%;
height:50px;
border-style:solid;
position:relative;
`

const Search = styled.input`
position:absolute;
background-color:#FC5C65;
border-style:none;
left:10px;
top:

width:100%;
height:50px;
`
// const Buttons = styled.button``

const SearchBar = ({
}) => {
    return <Container>
            <Search/>
    </Container>
}

export default SearchBar;