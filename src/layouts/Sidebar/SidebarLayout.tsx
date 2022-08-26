import React, { memo, useState } from "react";
import {
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  styled,
  Box,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  StarBorder,
  MoveToInbox,
  Drafts,
  Send,
} from "@mui/icons-material";

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

const ListItemCustom = styled(ListItem)(
  ({ theme }) => `
    color: #FFFFFF;
    opacity: 0.6;
    padding:0;

    &:focus {
      opacity: 1;
      border-width: 2px;
      border-style: solid;
      border-image: linear-gradient(90deg, #eeeeee 0%, #cccccc 40%, rgba(0, 0, 0, 0) 100%);
      border-image-slice: 1;
      border-image-width: 2px 0;
      filter: drop-shadow(0px 0px 12px #EA5284);
    }
  `
);

const SideBarLayout = () => {
  const [state, setState] = useState(new Map<string, boolean>());

  const handleClick = (key: string) => () => {
    const value = state.get(key);
    setState(
      (map) => new Map(map.set(key, value === undefined ? true : !value))
    );
  };

  return (
    <Box p="0px 16px 8px 8px" width="100%">
      <img src="/union.png" />
      <List component="nav" sx={{ pt: "40px" }}>
        {lists.map(({ key, label, icon: Icon, items }) => {
          const open = state.get(key) || false;
          return (
            <div key={key}>
              <ListItemCustom button={true as any} onClick={handleClick(key)}>
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
                        key={childKey}
                        button={true as any}
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
    </Box>
  );
};

const SideBar = memo(SideBarLayout);
export default SideBar;
