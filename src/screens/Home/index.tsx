import { getAllEventsFn } from "@/apis/event/eventApi";
import SideBar from "@/layouts/Sidebar/SidebarLayout";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import { Container, Overlay, MainLayout } from "./styled";

export interface IHomeScreenProps {}

const HomeScreen = (props: IHomeScreenProps) => {
  // const { status, data, error, isFetching } = useQuery(["events"], () =>
  //   getAllEventsFn()
  // );
  // console.log(data);
  return (
    <Container>
      <Overlay />
      <Box position="relative" display="grid" gridTemplateColumns="272px 1fr">
        <SideBar />
        <MainLayout>HomeScreen</MainLayout>
      </Box>
    </Container>
  );
};

const Home = memo(HomeScreen);
export default Home;
