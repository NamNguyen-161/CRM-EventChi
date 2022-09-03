import React, { memo, useState, useEffect, useLayoutEffect } from "react";
import {
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  styled,
  Box,
  Avatar,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Name } from "./styled";
import { useQuery } from "@tanstack/react-query";
import { onError } from "@/utils/apiHelper";
import { getAllEventsFn } from "@/apis/event/eventApi";
import { LinkRoute } from "@/styles/styled";
import { createEvent, lists, templateSideBarEvent } from "./types";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";
import { IUserInfo } from "@/apis/auth/types";
import { useAppSelector } from "@/hooks";

const PADDING_WHEN_LARGER = 2;

const ItemText = styled(ListItemText)(
  ({ theme }) => `
    padding-left: 0px;
    margin: 11px auto;
    text-transform: uppercase;
    color: white;

    & .MuiTypography-root {
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      font-style: normal;
    }
  `
);

const ListItemCustom = styled(ListItem)<{ focus: number; spacing: string }>(
  ({ theme, focus, spacing }) => `
    color: #FFFFFF;
    opacity: 0.6;
    padding: 0;
    padding-left: ${theme.spacing(
      2.5 * (spacing.split("/").length - PADDING_WHEN_LARGER)
    )};
    ${
      focus &&
      `
        opacity: 1;
        border-width: 2px;
        border-style: solid;
        border-image: linear-gradient(90deg, #eeeeee 0%, #cccccc 40%, rgba(0, 0, 0, 0) 100%);
        border-image-slice: 1;
        border-image-width: 2px 0;
        filter: drop-shadow(0px 0px 12px #EA5284);
      `
    }
  `
);

interface Props {
  userInfo: IUserInfo;
}

const SideBarLayout = (props: Props) => {
  const { userInfo } = props;
  const role = useAppSelector((state) => state.auth.role);

  const [state, setState] = useState(new Map<string, boolean>());
  const [focused, setFocused] = useState(new Map<string, boolean>());
  const [sidebar, setSidebar] = useState(lists);

  //TODO: API
  const { data, isLoading } = useQuery(["list_event"], () => getAllEventsFn(), {
    onError,
    staleTime: Infinity,
  });

  //todo EFFECT
  useLayoutEffect(() => {
    if (data?.docs) {
      const listEvent = data?.docs.map((event) => templateSideBarEvent(event));
      const firstElement = sidebar.shift();
      const lastElement = sidebar.pop();
      if (firstElement && lastElement) {
        if (data.docs.length) {
          const newSideBar = [
            ...[firstElement],
            ...listEvent,
            ...[lastElement],
          ];
          setSidebar(newSideBar);
        } else {
          const newSideBar = [
            ...[firstElement],
            ...[createEvent],
            ...[lastElement],
          ];
          setSidebar(newSideBar);
        }
      }
    }
  }, [data?.docs]);

  // TODO: HANDLE
  const handleClickListItem = (key: string) => {
    const value = state.get(key);
    setState(
      (map) => new Map(map.set(key, value === undefined ? true : !value))
    );
    handleFocusedItem(key);
  };

  const handleFocusedItem = (key: string) => {
    const value = focused.get(key);
    if (!value) {
      setFocused(new Map([[key, true]]));
    }
  };

  if (isLoading || !userInfo) return <LoadingIndicator />;

  return (
    <Box
      p="0px 16px 8px 8px"
      width="100%"
      display="grid"
      gridTemplateRows="110px 1fr 72px"
      gap="16px"
    >
      <img src="/union.png" />
      <List component="nav">
        {sidebar.map(({ key, label, icon: Icon, items }) => {
          const open = state.get(key) || false;
          return (
            <div key={key}>
              <LinkRoute to={key}>
                <ListItemCustom
                  button={true as any}
                  onClick={() => handleClickListItem(key)}
                  focus={focused.get(key) ? 1 : 0}
                  spacing={key}
                >
                  <ListItemIcon>{Icon(focused.get(key) ? 1 : 0)}</ListItemIcon>
                  <ItemText inset primary={label} />
                  {items ? open ? <ExpandLess /> : <ExpandMore /> : <></>}
                </ListItemCustom>
              </LinkRoute>
              {items && items.length > 0 && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {items.map(
                      ({
                        key: childKey,
                        label: childLabel,
                        items: ItemChildren,
                      }: any) => {
                        const openChild = state.get(childKey) || false;
                        return (
                          <div key={childKey}>
                            <LinkRoute to={childKey}>
                              <ListItemCustom
                                focus={focused.get(childKey) ? 1 : 0}
                                key={childKey}
                                spacing={childKey}
                                button={true as any}
                                onClick={() => handleClickListItem(childKey)}
                              >
                                <ListItemIcon></ListItemIcon>
                                <ItemText inset primary={childLabel} />
                                {ItemChildren ? (
                                  openChild ? (
                                    <ExpandLess />
                                  ) : (
                                    <ExpandMore />
                                  )
                                ) : (
                                  <></>
                                )}
                              </ListItemCustom>
                            </LinkRoute>
                            {ItemChildren && (
                              <Collapse
                                in={openChild}
                                timeout="auto"
                                unmountOnExit
                              >
                                <List component="div" disablePadding>
                                  {ItemChildren.map(
                                    ({
                                      key: childItemKey,
                                      label: childItemLabel,
                                    }: any) => (
                                      <LinkRoute
                                        to={childItemKey}
                                        key={childItemKey}
                                      >
                                        <ListItemCustom
                                          spacing={childItemKey}
                                          focus={
                                            focused.get(childItemKey) ? 1 : 0
                                          }
                                          key={childItemKey}
                                          button={true as any}
                                          onClick={() =>
                                            handleFocusedItem(childItemKey)
                                          }
                                        >
                                          <ListItemIcon></ListItemIcon>
                                          <ItemText
                                            inset
                                            primary={childItemLabel}
                                          />
                                        </ListItemCustom>
                                      </LinkRoute>
                                    )
                                  )}
                                </List>
                              </Collapse>
                            )}
                          </div>
                        );
                      }
                    )}
                  </List>
                </Collapse>
              )}
            </div>
          );
        })}
      </List>
      <Box
        display="inline-flex"
        gap="16px"
        justifyItems="flex-start"
        alignItems="center"
      >
        <Avatar
          alt={`${userInfo.firstName} ${userInfo.lastName}`}
          src={userInfo.profileUrl}
          className="pointer"
        />
        <Box>
          <Name name="username">{`${userInfo.firstName} ${userInfo.lastName}`}</Name>
          <Name name="rolename">{role}</Name>
        </Box>
      </Box>
    </Box>
  );
};

const SideBar = memo(SideBarLayout);
export default SideBar;
