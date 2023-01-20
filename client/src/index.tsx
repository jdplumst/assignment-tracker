import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AssignmentsContextProvider } from './context/AssignmentContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AssignmentsContextProvider>
      <App />
    </AssignmentsContextProvider>
  </React.StrictMode>
);
