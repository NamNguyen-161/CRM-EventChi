import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const WrapperLoading = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.3);
  z-index: 1;
`;

export interface ILoadingIndicatorProps {}

export default function LoadingIndicator(props: ILoadingIndicatorProps) {
  return (
    <WrapperLoading>
      <CircularProgress size={100} />
    </WrapperLoading>
  );
}
