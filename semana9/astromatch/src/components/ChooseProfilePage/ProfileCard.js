import React from 'react';
import styled from 'styled-components';

const ProfileCardContainer = styled.div`
    
`

function  ProfileCard() {
  return (
      <div>
          <img src={'https://picsum.photos/300/400'}/>
          <p>Nome da pessoa, 30</p>
          <p>Descrição da pessoa</p>
      </div>
  )
}

export default ProfileCard;