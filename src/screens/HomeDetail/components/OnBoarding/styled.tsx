import styled from "styled-components";

export const TitleOnBoarding = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 24px;
  width: 100%;
  align-items: center;
`;

export const PercentOnBoard = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  background: linear-gradient(136.03deg, #00a1e5 -40.45%, #ea5284 110.22%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ContentOnBoarding = styled.div`
  background: rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
`;

export const WrapperItemOnBoarding = styled.div`
  width: 100%;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 20px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.01) 100%
    );
  }
`;
