import { Button, styled, Typography } from "@mui/material";
import React, { memo } from "react";

const TypographyStyle = styled(Typography)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
  `
);

const ButtonStyle = styled(Button)(
  ({ theme }) => `
    background: ${theme.palette.primary.main};
    padding: 16px 32px;
    border-radius: 4px;
  `
);

export interface IButtonAuthScreenProps {
  children?: React.ReactNode;
  action?: () => void;
  btnStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}

const ButtonAuth = (props: IButtonAuthScreenProps) => {
  const { action, children, btnStyle, textStyle } = props;
  return (
    <ButtonStyle variant="contained" style={btnStyle}>
      <TypographyStyle style={textStyle}>{children}</TypographyStyle>
    </ButtonStyle>
  );
};

const ButtonAuthScreen = memo(ButtonAuth);
export default ButtonAuthScreen;
