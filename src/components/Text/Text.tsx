import { styled, Typography, TypographyProps } from "@mui/material";
import React, { memo } from "react";

const TypographyStyle = styled(Typography)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
  `
);

export interface ITextAuthScreenProps extends TypographyProps {
  value: string | number;
  textStyle?: React.CSSProperties;
}

const TextCustom = (props: ITextAuthScreenProps) => {
  const { value, textStyle, ...typographyProps } = props;
  return (
    <TypographyStyle style={textStyle} {...typographyProps}>
      {value}
    </TypographyStyle>
  );
};

const TextComponent = memo(TextCustom);
export default TextComponent;
