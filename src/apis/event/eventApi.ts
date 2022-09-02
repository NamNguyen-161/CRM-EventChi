import { getOrganizationId } from "@/utils/localStorageService";
import httpRequest from "../httpRequest";
import { IListEvent, Pageable, SearchEvent } from "./type";

const baseApi = "eventmanager";

export const getAllEventsFn = async (searchPage?: Pageable<SearchEvent>) => {
  let limit = 10;
  let page = 1;
  const organizationId = getOrganizationId();
  let body = { organizationId };

  if (searchPage) {
    limit = searchPage.limit || 10;
    page = searchPage.page || 1;
    body = {
      ...body,
      ...searchPage.searchInfo,
    };
  }
  const response = await httpRequest.post<IListEvent>(
    `${baseApi}/events/search-events?page=${page}&limit=${limit}`,
    body
  );
  console.log({ response });
  return response.data;
};
