import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

import {BrowserRouter} from "react-router-dom";

import Router from "router/Router.jsx";
import {ToastContainer} from "react-toastify";
import React from "react";


function App() {
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Router/>
          <ToastContainer />
      </BrowserRouter>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App
