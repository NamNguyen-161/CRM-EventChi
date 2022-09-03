import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const TextNormal = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
`;

export const CreateEvent = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
`;

export const WrapperItemSuggestion = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  display: grid;
  grid-template-columns: 30px 1fr 12px;
  gap: 27px;
  padding: 20px 28px;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 16px;

  &:hover {
    box-shadow: 0px 4px 24px 8px rgba(0, 0, 0, 0.05);
    background: white;
  }
`;

export const Suggestion = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
`;
