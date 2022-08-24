import React, { memo, useRef, useLayoutEffect } from "react";
import usePrevious from "@/hooks/usePrevious";
import { styled, TextField } from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiFilledInput-input": {
    textAlign: "center",
    width: "56px",
    height: "56px",
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 500,
    padding: 0,
  },
  "& .MuiFilledInput-underline": {
    "&:before": {
      borderBottom: "2px solid transparent",
    },

    "&:hover:not($disabled):not($focused):not($error):before": {
      borderBottom: "2px solid transparent",
    },
    "&:after": {
      margin: "0 16px",
    },
  },
}));

export interface SingleOTPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
}

export function SingleOTPInputComponent(props: SingleOTPInputProps) {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return (
    <CustomTextField
      inputProps={{ ...rest, type: "password" }}
      inputRef={inputRef}
      variant="filled"
    />
  );
}

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
