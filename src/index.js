import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DepartmentsProvider } from './context/departments';
import { EmployeesProvider } from './context/employees';
import { CustomersProvider } from './context/customers';
import { RolesProvider } from './context/roles';
import { AppointmentProvider } from './context/appointments';
import { AuthProvider } from './context/Auth';
import { BrowserRouter, Route } from 'react-router-dom';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DepartmentsProvider>
          <EmployeesProvider>
            <CustomersProvider>
              <AppointmentProvider>
                <RolesProvider>
                <App />
                </RolesProvider>
              </AppointmentProvider>
            </CustomersProvider>
          </EmployeesProvider>
        </DepartmentsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();