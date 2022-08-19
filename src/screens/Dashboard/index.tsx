import React, { memo } from "react";

export interface IDashboardScreenProps {}

const DashboardScreen = (props: IDashboardScreenProps) => {
  console.log(import.meta.env.VITE_BASE_URL);
  return <div>DashboardScreen</div>;
};

const Dashboard = memo(DashboardScreen);
export default Dashboard;
