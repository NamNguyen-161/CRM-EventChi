import { LoadingContext } from "@/contexts/loadingContext";
import { useContext } from "react";

export const useLoading = () => useContext(LoadingContext);
