import { useState, createContext } from "react";
import { IChildren } from "@/utils/types";

export interface ILoadingContext {
  loading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

export const LoadingContext = createContext<ILoadingContext>({
  loading: false,
  showLoading: () => {},
  hideLoading: () => {},
});

export function LoadingProvider(props: IChildren) {
  const [loading, setLoading] = useState(false);

  const contextValue = {
    loading: loading,
    showLoading: () => setLoading(true),
    hideLoading: () => setLoading(false),
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {props.children}
    </LoadingContext.Provider>
  );
}
