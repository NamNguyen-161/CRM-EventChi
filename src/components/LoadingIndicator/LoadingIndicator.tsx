import { CircularProgress, CircularProgressProps } from "@mui/material";
import React from "react";
import styled from "styled-components";

const WrapperLoading = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.25);
  z-index: 1;
`;

export interface ILoadingIndicatorProps extends CircularProgressProps {
  styleWrapper?: React.CSSProperties;
}

export default function LoadingIndicator(props: ILoadingIndicatorProps) {
  const { styleWrapper, ...circularProgressProps } = props;
  return (
    <WrapperLoading style={styleWrapper}>
      <CircularProgress size={100} {...circularProgressProps} />
    </WrapperLoading>
  );
}
