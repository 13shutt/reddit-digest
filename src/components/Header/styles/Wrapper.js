import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  
  ${({ main }) => 
    main && css`
      height: 73px;
      background: #000000;  
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `
  }

  ${({ logo }) => 
    logo && css`
      display: flex;
      flex-direction: row;
      margin-left: 50px;  
    `
  }  

  ${({ titles }) => 
    titles && css`
      display: flex;
      flex-direction: row;  
    `
  }  

  ${({ login }) => 
    login && css`
      display: flex;
      flex-direction: row;  
      margin-right: 50px;
      align-items: baseline;
      p {
        border: 0.5px solid #C4C4C4;
        position: relative;
        height: 32px;
        margin-left: -3px;
        left: -4px;
        top: 6px;
      }
    `
  }  
  
`

export default Wrapper