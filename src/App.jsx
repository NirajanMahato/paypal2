import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./core/public/homePage/Home";
import SendMoneyPage from "./core/public/sendPage/SendMoneyPage";
import SendPage from "./core/public/sendPage/SendPage";

const queryClient = new QueryClient();

function App() {
  window.addEventListener("beforeunload", () => {
    sessionStorage.removeItem("balance");
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={createBrowserRouter([
            { path: "/", element: <HomePage /> },
            { path: "/send", element: <SendPage /> },
            { path: "/send-money", element: <SendMoneyPage /> },
          ])}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
