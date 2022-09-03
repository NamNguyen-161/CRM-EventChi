import { Button, ButtonProps, styled, Typography } from "@mui/material";
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

export interface IButtonAuthScreenProps extends ButtonProps {
  children?: React.ReactNode;
  action?: () => void;
  btnStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}

const ButtonCustom = (props: IButtonAuthScreenProps) => {
  const { action, children, btnStyle, textStyle, ...buttonProps } = props;
  return (
    <ButtonStyle variant="contained" style={btnStyle} {...buttonProps}>
      <TypographyStyle style={textStyle}>{children}</TypographyStyle>
    </ButtonStyle>
  );
};

const ButtonComponent = memo(ButtonCustom);
export default ButtonComponent;
