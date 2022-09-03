import * as React from "react";
import {
  Box,
  CircularProgress,
  circularProgressClasses,
  CircularProgressProps,
  styled,
  Typography,
} from "@mui/material";
import { PercentOnBoard } from "./styled";

export interface IProgressOnBoardingProps extends CircularProgressProps {
  value: number;
}

export default function ProgressOnBoarding(props: IProgressOnBoardingProps) {
  const { value } = props;
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        {...props}
        variant="determinate"
        sx={{
          color: (theme) => theme.palette.grey[200],
        }}
        size={88}
        thickness={4}
        value={100}
      />
      <svg width="88" height="88" style={{ position: "absolute" }}>
        <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#00A1E5" />
          <stop offset="1" stop-color="#EA5284" />
        </linearGradient>
      </svg>
      <CircularProgress
        {...props}
        variant="determinate"
        value={75}
        size={88}
        thickness={4}
        sx={{
          "svg circle": { stroke: "url(#linearColors)" },
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          top: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PercentOnBoard>{`${value}%`}</PercentOnBoard>
      </Box>
    </Box>
  );
}
