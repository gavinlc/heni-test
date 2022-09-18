import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline'

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './app/app';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
