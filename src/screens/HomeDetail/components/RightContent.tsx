import * as React from "react";
import OnBoarding from "./OnBoarding/OnBoarding";

export interface IHomeRightContentProps {}

export default function HomeRightContent(props: IHomeRightContentProps) {
  return (
    <div>
      <OnBoarding />
    </div>
  );
}
