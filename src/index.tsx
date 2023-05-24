import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import Layout from './Layout';
import Home from './pages/Home/Home';
import NewProduct from './pages/NewProduct/NewProduct';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/admin',
        element: <NewProduct></NewProduct>,
      },
      { path: '/cart', element: <p>cart page</p> },
      { path: 'product/:id', element: <ProductDetailPage></ProductDetailPage> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
