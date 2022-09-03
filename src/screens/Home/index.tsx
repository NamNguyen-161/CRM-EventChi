import { getAllEventsFn } from "@/apis/event/eventApi";
import SideBar from "@/layouts/Sidebar/SidebarLayout";
import { Badge, Box, IconButton, styled } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import {
  Container,
  Overlay,
  MainLayout,
  Header,
  Footer,
  Content,
  TermAndCondition,
  Copyright,
} from "./styled";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_CONFIG } from "@/constants/routes";
import { lazyMinLoadTime } from "@/components/LazyLoadComponent/LazyLoadComponent";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { getUserInfoFn } from "@/apis/auth/authApi";
import { onError } from "@/utils/apiHelper";
import { IUserInfo } from "@/apis/auth/types";

const EventDetailScreen = lazyMinLoadTime(
  () => import("@/screens/EventDetail"),
  1000
);
const HomeDetailScreen = lazyMinLoadTime(
  () => import("@/screens/HomeDetail"),
  1000
);

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: "#DE273D",
  },
});

export interface IHomeScreenProps {}

const HomeScreen = (props: IHomeScreenProps) => {
  const { data: userInfo, isLoading } = useQuery(
    ["user_info"],
    () => getUserInfoFn(),
    {
      onError,
      staleTime: Infinity,
    }
  );
  return (
    <Container>
      <Overlay />
      <Box position="relative" display="grid" gridTemplateColumns="272px 1fr">
        <SideBar userInfo={userInfo as IUserInfo} />
        <MainLayout>
          <Header>
            <div style={{ color: "Red" }}>Breadcrumb</div>
            <StyledBadge overlap="circular" badgeContent="" variant="dot">
              <IconButton
                size="medium"
                style={{
                  background: "rgba(0,0,0,0.05)",
                  width: "48px",
                  height: "48px",
                }}
              >
                <NotificationsIcon fontSize="inherit" htmlColor="#323232" />
              </IconButton>
            </StyledBadge>
          </Header>
          <Content>
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
          </Content>
          <Footer>
            <TermAndCondition>Terms & Conditions</TermAndCondition>
            <Copyright>(C) {new Date().getFullYear()} EventCHI</Copyright>
          </Footer>
        </MainLayout>
      </Box>
    </Container>
  );
};

const Home = memo(HomeScreen);
export default Home;
