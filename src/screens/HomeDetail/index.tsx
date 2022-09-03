import AuthContainer from "@/containers/Auth";
import AuthLayout from "@/layouts/Auth";
import React, { memo } from "react";
import HomeLeftContent from "./components/LeftContent";
import HomeRightContent from "./components/RightContent";
import { Wrapper } from "./styled";

export interface IHomeDetailProps {}

const HomeDetail = (props: IHomeDetailProps) => {
  return (
    <Wrapper>
      <HomeLeftContent />
      <HomeRightContent />
    </Wrapper>
  );
};

const HomeDetailScreen = memo(HomeDetail);
export default HomeDetailScreen;
