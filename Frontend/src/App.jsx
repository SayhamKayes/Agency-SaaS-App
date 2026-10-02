import React from 'react';
import { AppProvider } from './Context/AppContext';
import { MainLayout } from './Layouts/MainLayout';
import { AppRouter } from './routers/AppRouter';
import './App.css';

export default function App() {
  return (
    <AppProvider>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </AppProvider>
  );
}
