export interface IChildren {
  children?: React.ReactNode;
}

export interface ISvgOption {
  opacity?: number;
}

export const MAX_HEIGHT_SELECT = 300;

export interface IPagination<T> {
  docs: Array<T>;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  page: number;
  pagingCounter: number;
  prevPage: number;
  totalDocs: number;
  totalPages: number;
}
