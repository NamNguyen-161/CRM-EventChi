import AuthContainer from "@/containers/Auth";
import AuthLayout from "@/layouts/Auth";
import React, { memo } from "react";

export interface IEventDetailProps {}

const EventDetail = (props: IEventDetailProps) => {
  return <div style={{ color: "red", fontSize: "50px" }}>EventDetail</div>;
};

const EventDetailScreen = memo(EventDetail);
export default EventDetailScreen;
