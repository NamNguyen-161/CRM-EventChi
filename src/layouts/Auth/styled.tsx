import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: ${`url("/background.svg")`};
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  position: relative;
`;

export const ContainerLayout = styled.div`
  margin: 0 auto;
  height: 100%;

  @media (max-width: 1440px) {
    width: 100vh;
  }

  @media (min-width: 1441px) {
    width: 1440px;
  }
`;

export const AbsoluteLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(136.03deg, #00a1e5 -40.45%, #ea5284 110.22%);
  mix-blend-mode: multiply;
  opacity: 0.9;
  height: 100%;
  width: 100%;
`;

export const BtnGetApp = styled.div`
  opacity: 0.8;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.1);
  }
`;

export const TextGetAccount = styled.p`
  opacity: 0.8;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;
