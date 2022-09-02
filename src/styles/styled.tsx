import { Link } from "react-router-dom";
import styled from "styled-components";

export const SpaceVertical = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
`;

export const LinkRoute = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
