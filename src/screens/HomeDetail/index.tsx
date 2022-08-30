import AuthContainer from "@/containers/Auth";
import AuthLayout from "@/layouts/Auth";
import React, { memo } from "react";

export interface IHomeDetailProps {}

const HomeDetail = (props: IHomeDetailProps) => {
  return <div style={{ color: "red", fontSize: "50px" }}>HomeDetail</div>;
};

const HomeDetailScreen = memo(HomeDetail);
export default HomeDetailScreen;
