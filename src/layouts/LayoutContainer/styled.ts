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
`;
