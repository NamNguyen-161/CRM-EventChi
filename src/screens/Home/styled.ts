import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: url("/home_background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(136.78deg, #00a1e5 -52.84%, #ea5284 68.98%);
  mix-blend-mode: multiply;
  opacity: 0.9;
`;

export const MainLayout = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  height: calc(100vh - 32px);
  width: 100%;
  display: grid;
  grid-template-rows: 48px 1fr 48px;
  gap: 24px;
  overflow: hidden;
  padding: 16px 0px 8px;
`;

export const Header = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  padding: 0 60px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 14px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 14px 14px transparent;
    border: solid 4px transparent;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 14px 14px #ea5284;
    border: solid 4px transparent;
    border-radius: 14px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

export const Footer = styled.div`
  background: rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 60px;
  align-items: center;
`;

export const TermAndCondition = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

export const Copyright = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.87);
`;
