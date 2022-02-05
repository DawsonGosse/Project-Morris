import styled from 'styled-components';
import * as React from 'react';


const Container = styled.div``

const BackSearch = styled.div`
position:relative;
`


const Search = styled.input`
position:absolute;
background-color:#FC5C65;
border-style:none;
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