import React from 'react'

import { Wrapper, Title } from './styles'

const Header = () => ( 
  <header>
    <Wrapper main>
      <Wrapper logo>
        <Title>
          <span>Reddit </span>
          <span>Diegest</span>
        </Title>
      </Wrapper>
      <Wrapper titles>
        <Title>Web Design</Title>
        <Title>Front-End</Title>
        <Title>Back-End</Title>
        <Title>Management</Title>
      </Wrapper>
      <Wrapper login>
        <p></p>
        <Title>Login via Reddit</Title>
      </Wrapper>
    </Wrapper>
  </header>
)
 
export default Header;