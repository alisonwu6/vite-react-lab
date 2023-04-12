import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication/Authentication';
import DateTime from './pages/DateTime/DateTime';
import Form from './pages/Form/Form';
import { ThemeProvider } from '@mui/material/styles';
import { globalTheme } from './globalTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={globalTheme}>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<App />}
        >
          <Route
            path='authentication'
            element={<Authentication />}
          />
          <Route
            path='date-time'
            element={<DateTime />}
          />
          <Route
            path='form'
            element={<Form />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
