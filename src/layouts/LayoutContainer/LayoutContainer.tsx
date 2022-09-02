import React, { memo } from "react";
import { Container, Overlay, MainLayout } from "./styled";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import SideBar from "../Sidebar/SidebarLayout";
import { ROUTE_CONFIG } from "@/constants/routes";

export interface ILayoutMainProps {}

const LayoutMain = (props: ILayoutMainProps) => {
  return (
    <Container>
      <Overlay />
      <Box position="relative" display="grid" gridTemplateColumns="272px 1fr">
        <SideBar />
        <MainLayout>
          <Outlet />
        </MainLayout>
      </Box>
    </Container>
  );
};

const LayoutContainer = memo(LayoutMain);
export default LayoutContainer;
