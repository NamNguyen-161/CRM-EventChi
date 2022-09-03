import { Event } from "@/apis/event/type";
import IconHome from "@/images/IconHome";
import IconOption from "@/images/IconOption";
import IconEvent from "@/images/IconEvent";

export const templateSideBarEvent = (data: Event) => {
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

export const createEvent = {
  key: "event",
  label: "Event",
  icon: (value: number) => <IconEvent opacity={value} />,
  items: [
    {
      key: "event/create",
      label: "Create",
    },
  ],
};

export const lists = [
  {
    key: "home",
    label: "Home",
    icon: (value: number) => <IconHome opacity={value} />,
  },
  {
    key: "organizer",
    label: "Organizer",
    icon: (value: number) => <IconOption opacity={value} />,
    items: [
      { key: "organizer/crew", label: "Crew" },
      { key: "organizer/events", label: "Events" },
      { key: "organizer/pos", label: "Pos" },
      { key: "organizer/products", label: "Products" },
    ],
  },
];
