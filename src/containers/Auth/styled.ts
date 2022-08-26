import styled from "styled-components";

const HEIGH_FORM_LOGIN = 600;
const WIDTH_FORM_LOGIN = 480;

export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  overflow: hidden;
  width: ${WIDTH_FORM_LOGIN}px;
  height: ${HEIGH_FORM_LOGIN}px;
  position: relative;
`;

export const WrapperAbsolute = styled.div`
  position: absolute;
  top: 40px;
  bottom: 40px;
  left: 40px;
  right: 40px;
`;

export const TextLogin = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-transform: uppercase;
  color: #2f3747;
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.6);
  opacity: 0.8;
`;

export const SignUpRole = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  position: fixed;
  left: 40px;
  bottom: 40px;
`;
