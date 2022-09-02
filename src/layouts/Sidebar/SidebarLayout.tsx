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
import IconHome from "@/images/IconHome";
import IconOption from "@/images/IconOption";
import IconEvent from "@/images/IconEvent";
import { Event } from "@/apis/event/type";
import { LinkRoute } from "@/styles/styled";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";

const PADDING_WHEN_LARGER = 2;

const templateSideBarEvent = (data: Event) => {
  const { name, _id } = data;
  const event = {
    key: `${_id}`,
    label: `${name}`,
    icon: (value: number) => <IconEvent opacity={value} />,
    items: [
      {
        key: `${_id}/crew`,
        label: "Crew",
        items: [
          { key: `${_id}/crew/teams`, label: "Teams" },
          { key: `${_id}/crew/members`, label: "Members" },
        ],
      },
      {
        key: `${_id}/sale`,
        label: "Sales",
        items: [
          { key: `${_id}/sale/menus`, label: "Menus" },
          { key: `${_id}/sale/products`, label: "Products" },
          { key: `${_id}/sale/token`, label: "Tokens" },
        ],
      },
      {
        key: `${_id}/tickets`,
        label: "Tickets",
      },
    ],
  };
  return event;
};

const lists = [
  {
    key: "home",
    label: "Home",
    icon: (value: number) => <IconHome opacity={value} />,
  },
  {
    key: "event",
    label: "Event",
    icon: (value: number) => <IconEvent opacity={value} />,
    items: [
      {
        key: "event/create",
        label: "Create",
      },
    ],
  },
  {
    key: "option",
    label: "Sub Option",
    icon: (value: number) => <IconOption opacity={value} />,
    items: [
      { key: "option/crew", label: "Crew" },
      { key: "option/events", label: "Events" },
      { key: "option/pos", label: "Pos" },
      { key: "option/products", label: "Products" },
    ],
  },
];

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

const SideBarLayout = () => {
  const [state, setState] = useState(new Map<string, boolean>());
  const [focused, setFocused] = useState(new Map<string, boolean>());
  const [sidebar, setSidebar] = useState(lists);

  //TODO: API
  const { data, isLoading } = useQuery({
    queryKey: ["list_event"],
    queryFn: () => getAllEventsFn(),
    onError,
    staleTime: Infinity,
    enabled: false,
  });

  //todo EFFECT
  useLayoutEffect(() => {
    if (data?.docs?.length) {
      const listEvent = data?.docs.map((event) => templateSideBarEvent(event));
      const firstElement = sidebar.shift();
      const lastElement = sidebar.pop();
      if (firstElement && lastElement) {
        const newSideBar = [...[firstElement], ...listEvent, ...[lastElement]];
        setSidebar(newSideBar);
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

  // if (isLoading) return <LoadingIndicator />;
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
                  <ListItemIcon>{Icon(0)}</ListItemIcon>
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
                                      <LinkRoute to={childItemKey}>
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
        <Avatar alt="Nick Van der Meij" className="pointer" />
        <Box>
          <Name name="username">john smith</Name>
          <Name name="rolename">Event Organizer</Name>
        </Box>
      </Box>
    </Box>
  );
};

const SideBar = memo(SideBarLayout);
export default SideBar;
