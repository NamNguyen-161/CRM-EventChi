import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/configureStore";
import NavigationApp from "./routes";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/ThemeProvider";
import "./styles/app.scss";
import { LoadingProvider } from "./contexts/loadingContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <LoadingProvider>
              <GlobalStyle />
              <CssBaseline />
              <ToastContainer />
              <NavigationApp />
            </LoadingProvider>
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
