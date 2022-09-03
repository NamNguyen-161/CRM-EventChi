import * as React from "react";
import { WrapperItemSuggestion } from "../styled";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconSuggestionEvent from "/ic_suggestion_event.svg";

export interface IItemSuggestionProps {
  label: string;
  icon: string;
}

export default function ItemSuggestion(props: IItemSuggestionProps) {
  const { label, icon } = props;
  return (
    <WrapperItemSuggestion>
      <img src={icon} />
      <div>{label}</div>
      <NavigateNextIcon htmlColor="rgba(0, 0, 0, 0.6)" />
    </WrapperItemSuggestion>
  );
}
