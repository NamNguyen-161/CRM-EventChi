import IconSuggestionCreateEvent from "/ic_suggestion_newEvent.svg";
import IconSuggestionEventSale from "/ic_suggestion_eventSale.svg";
import IconSuggestionPayment from "/ic_suggestion_payment.svg";
import IconSuggestionTicket from "/ic_suggestion_ticket.svg";
import IconSuggestionRiskAndRevenue from "/ic_suggestion_riskAndRevenue.svg";
import IconSuggestionContractsAgreements from "/ic_suggestion_contractsAgreements.svg";

export const ListSuggestion = [
  { icon: IconSuggestionCreateEvent, label: "Set up new event" },
  { icon: IconSuggestionEventSale, label: "Set up event sales" },
  { icon: IconSuggestionPayment, label: "Set up payments" },
  { icon: IconSuggestionTicket, label: "Set up  tickets" },
  { icon: IconSuggestionRiskAndRevenue, label: "risk and revenue sharing" },
  {
    icon: IconSuggestionContractsAgreements,
    label: "contracts and agreements",
  },
];

export const listItemOnBoarding = [
  {
    title: "Create organizer account",
    description: "Organizer account is required to create event",
    completed: true,
  },
  {
    title: "complete company details",
    description: "Organizer account is required to create event",
    completed: false,
  },
  {
    title: "Upload documents",
    description: "Requirements for KYC",
    completed: false,
  },
  {
    title: "set up bank accounts",
    description: "For payouts",
    completed: false,
  },
];
