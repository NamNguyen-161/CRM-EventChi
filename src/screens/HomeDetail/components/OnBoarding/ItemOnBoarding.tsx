import TextComponent from "@/components/Text/Text";
import { IconButton } from "@mui/material";
import * as React from "react";
import { WrapperItemOnBoarding } from "./styled";
import DoneIcon from "@mui/icons-material/Done";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export interface IItemOnBoardingProps {
  completed: boolean;
  title: string;
  description: string;
}

export default function ItemOnBoarding(props: IItemOnBoardingProps) {
  const { completed, title, description } = props;
  return (
    <WrapperItemOnBoarding>
      <div>
        <TextComponent
          value={title}
          textStyle={{
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
            textTransform: "uppercase",
            color: "rgba(0, 0, 0, 0.87)",
          }}
        />
        <TextComponent
          value={description}
          textStyle={{
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "20px",
            textTransform: "uppercase",
            color: "rgba(0, 0, 0, 0.6)",
          }}
        />
      </div>
      <div>
        <IconButton
          size="medium"
          style={{
            background: `${completed ? "#48A44A" : "#FFFFFF"}`,
            width: "100%",
            height: "40px",
            boxShadow: "0px 4px 8px 2px rgba(0, 0, 0, 0.05)",
          }}
        >
          {completed ? (
            <DoneIcon fontSize="inherit" htmlColor="#FFFFFF" />
          ) : (
            <NavigateNextIcon
              fontSize="inherit"
              htmlColor="rgba(0, 0, 0, 0.6)"
            />
          )}
        </IconButton>
      </div>
    </WrapperItemOnBoarding>
  );
}
