import React from "react";
import styled, { keyframes } from "styled-components";

// const Father = styled.div`
//   display: flex;
// `;

// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

// const Input = styled.input.attrs({ required: true })`
//   background-color: tomato;
// `;

// const animation = keyframe`
//   0% {
//     transform: rotate(0deg);
//     border-radius: 0px;
//   }
//   50% {
//     border-radius: 100px;
//   }
//   100% {
//     transform: rotate(360deg);
//     border-radius: 0px;
//   }
// `;

// const Emoji = styled.span`
//   font-size: 36px;
// `;

// const Box = styled.div`
//   height: 200px;
//   width: 200px;
//   background-color: tomato;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   animation: ${animation} 1s linear infinite;
//   ${Emoji} {
//     &:hover {
//       font-size: 98px;
//     }
//   }
// `;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>할로</Title>
    </Wrapper>
  );
}

export default App;
