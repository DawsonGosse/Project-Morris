import styled from 'styled-components';
import * as React from 'react';


const Container = styled.div``

const BackSearch = styled.div``

const Search = styled.input`
background-color:#FC5C65
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