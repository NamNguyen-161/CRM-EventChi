import { getAllEventsFn } from "@/apis/event/eventApi";
import SideBar from "@/layouts/Sidebar/SidebarLayout";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import { Container, Overlay, MainLayout } from "./styled";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_CONFIG } from "@/constants/routes";
import { lazyMinLoadTime } from "@/components/LazyLoadComponent/LazyLoadComponent";

const EventDetailScreen = lazyMinLoadTime(
  () => import("@/screens/EventDetail"),
  1000
);
const HomeDetailScreen = lazyMinLoadTime(
  () => import("@/screens/HomeDetail"),
  1000
);

export interface IHomeScreenProps {}

const HomeScreen = (props: IHomeScreenProps) => {
  return (
    <Container>
      <Overlay />
      <Box position="relative" display="grid" gridTemplateColumns="272px 1fr">
        <SideBar />
        <MainLayout>
          <Routes>
            <Route path={ROUTE_CONFIG.HOME} element={<HomeDetailScreen />} />
            <Route
              path={ROUTE_CONFIG.EVENT_DETAIL}
              element={<EventDetailScreen />}
            />
            <Route
              path="*"
              element={<Navigate to={ROUTE_CONFIG.HOME} replace />}
            />
          </Routes>
        </MainLayout>
      </Box>
    </Container>
  );
};

const Home = memo(HomeScreen);
export default Home;
