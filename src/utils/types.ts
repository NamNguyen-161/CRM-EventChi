import { MutationFunction, QueryFunction } from "@tanstack/react-query";

export interface IChildren {
  children?: React.ReactNode;
}

export const MAX_HEIGHT_SELECT = 300;

export type ResponseType<
  T extends Record<string, MutationFunction<any, any> | QueryFunction<any, any>>
> = {
  [k in keyof T]: ReturnType<T[k]> extends Promise<infer U>
    ? U
    : ReturnType<T[k]>;
};
