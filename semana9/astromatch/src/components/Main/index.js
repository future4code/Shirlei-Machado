import React from 'react';
import AppBar from '../AppBar';
import ChooseProfilePage from '../ChooseProfilePage';
import MatchListPage from '../MatchListPage';
import styled from 'styled-components';

const MainContainer = styled.div`
    border: 1px solid black;
    border-radius: 3px;
    width:400px;
    margin:30px;
    
`

function Main() {
    return (
        <MainContainer>
            <AppBar/>
             <ChooseProfilePage/>
            {/* <MatchListPage/>  */}
        </MainContainer>
    )
}
export default Main;