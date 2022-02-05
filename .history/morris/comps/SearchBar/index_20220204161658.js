import styled from 'styled-components';
import * as React from 'react';


const Container = styled.div``

const BackSearch = styled.div`
position:relative;
background-color:blue;
border-style:soid;

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
        <BackSearch>
            <Search/>
        </BackSearch>
    </Container>
}

export default SearchBar;