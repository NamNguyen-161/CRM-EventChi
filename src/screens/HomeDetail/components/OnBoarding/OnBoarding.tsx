import TextComponent from "@/components/Text/Text";
import { SpaceVertical } from "@/styles/styled";
import { Box } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
import { listItemOnBoarding } from "../../types";
import ItemOnBoarding from "./ItemOnBoarding";
import ProgressOnBoarding from "./Progress";
import { Header, ContentOnBoarding } from "./styled";

export interface IOnBoardingProps {}

const BoxOnBoarding = styled(Box)(
  ({ theme }) => `
  background: #FFFFFF;
  box-shadow: 0px 4px 24px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 24px 16px 16px;
  `
);

export default function OnBoarding(props: IOnBoardingProps) {
  return (
    <BoxOnBoarding>
      <Header>
        <ProgressOnBoarding value={75} />
        <div>
          <TextComponent
            value="1/4 finished"
            textStyle={{
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "20px",
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 0.6)",
            }}
          />
          <TextComponent
            value="onboarding"
            textStyle={{
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "32px",
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 0.87)",
            }}
          />
        </div>
      </Header>
      <SpaceVertical height={24} />
      <ContentOnBoarding>
        {listItemOnBoarding.map((item, index) => (
          <ItemOnBoarding
            key={index}
            title={item.title}
            description={item.description}
            completed={item.completed}
          />
        ))}
      </ContentOnBoarding>
    </BoxOnBoarding>
  );
}
