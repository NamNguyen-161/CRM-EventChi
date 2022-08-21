import styled from "styled-components";

export const SpaceVertical = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
`;
