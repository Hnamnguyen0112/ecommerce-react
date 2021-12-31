import React from 'react';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledH1 = styled.h1`
  ${tw`
    text-3xl
    font-bold 
    underline 
    text-amber-400
  `}
`;

function App() {
  return (
    <StyledH1>
      Hello world!
    </StyledH1>
  );
}

export default App;
