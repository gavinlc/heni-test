import { cleanup, getByText, render, waitFor } from '@testing-library/react';
import React from 'react';
import App from './app';

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('App', () => {
  afterEach(() => {
    delete global['fetch'];
    cleanup();
  });

  it('should render successfully', async () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => ({
        message: 'my message',
      }),
    });

    const { baseElement } = render(<App />, {wrapper});
    expect(baseElement).toBeTruthy();
  });
});
