import { IPagination } from "@/utils/types";

export interface Pageable<T> {
  searchInfo: T;
  limit: number;
  page: number;
}

export interface SearchEvent {
  keyword?: string;
  date?: string;
  countryCode?: string;
  ticketAvailable?: boolean;
  timeZone?: string;
  organizationId: string;
}

export interface Event {
  _id: string;
  creator: string;
  organization: string;
  collectorWallet: string;
  collectorWalletSigners: string[];
  name: string;
  description: string;
  currency: string;
  eventType: string[];
  location: Location;
  address: string;
  address2: string;
  countryCode: string;
  city: string;
  state: string;
  country: string;
  maxVisitors: number;
  expectedVisitors: number;
  currentVisitors: number;
  totalTickets: number;
  tags: string[];
  logoUrl: string;
  imageUrls: string[];
  supportEmail: string;
  website: string;
  supportNumber: string;
  startDate: Date;
  endDate: Date;
  topupOptions: number[];
  postalCode: string;
  requireCovidHealthForm: boolean;
  status: string;
  crews: Array<string>;
  teams: Array<string>;
}

export interface IListEvent extends IPagination<Event> {}
