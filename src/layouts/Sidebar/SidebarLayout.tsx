import React, { memo, useState } from "react";
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
import {
  ExpandLess,
  ExpandMore,
  StarBorder,
  MoveToInbox,
  Drafts,
  Send,
} from "@mui/icons-material";
import { Name } from "./styled";

const lists = [
  {
    key: "inbox",
    label: "Inbox",
    icon: MoveToInbox,
    items: [
      {
        key: "starred/children",
        label: "Starred",
        icon: StarBorder,
      },
    ],
  },
  {
    key: "drafts",
    label: "Drafts",
    icon: Drafts,
    items: [{ key: "send/children", label: "Sent Items", icon: Send }],
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

const ListItemCustom = styled(ListItem)<{ focus: boolean }>(
  ({ theme, focus }) => `
    color: #FFFFFF;
    opacity: ${focus ? 1 : 0.6};
    padding:0;

    // &:focus {
    //   opacity: 1;
    //   border-width: 2px;
    //   border-style: solid;
    //   border-image: linear-gradient(90deg, #eeeeee 0%, #cccccc 40%, rgba(0, 0, 0, 0) 100%);
    //   border-image-slice: 1;
    //   border-image-width: 2px 0;
    //   filter: drop-shadow(0px 0px 12px #EA5284);
    // }
  `
);

const SideBarLayout = () => {
  const [state, setState] = useState(new Map<string, boolean>());
  const [focused, setFocused] = useState(new Map<string, boolean>());

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
  console.log({ focused });

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
        {lists.map(({ key, label, icon: Icon, items }) => {
          const open = state.get(key) || false;
          const focus = focused.get(key) || false;
          return (
            <div key={key}>
              <ListItemCustom
                button={true as any}
                onClick={() => handleClickListItem(key)}
                focus={focus}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ItemText inset primary={label} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemCustom>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {items.map(
                    ({ key: childKey, label: childLabel, icon: ChildIcon }) => (
                      <ListItemCustom
                        focus={focus}
                        key={childKey}
                        button={true as any}
                        onClick={() => handleFocusedItem(key)}
                        sx={(theme) => ({
                          paddingLeft: theme.spacing(
                            2.5 * (childKey.split("/").length - 1)
                          ),
                        })}
                      >
                        <ListItemIcon>
                          <ChildIcon />
                        </ListItemIcon>
                        <ItemText inset primary={childLabel} />
                      </ListItemCustom>
                    )
                  )}
                </List>
              </Collapse>
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
          alt="Nick Van der Meij"
          src="/static/images/avatar/1.jpg"
          className="pointer"
        />
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
