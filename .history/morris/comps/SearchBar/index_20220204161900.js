import styled from 'styled-components';
import * as React from 'react';


const Container = styled.div`
display
`

const Search = styled.input`
position:absolute;
background-color:#FC5C65;
border-style:none;
left:10px;
`
// const Buttons = styled.button``

const SearchBar = ({
}) => {
    return <Container>
            <Search/>
    </Container>
}

export default SearchBar;