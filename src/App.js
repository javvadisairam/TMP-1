// App.js

import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './Frontend/AuthenticationAndSignIn/SignInPage';
import SignupPage from './Frontend/AuthenticationAndSignIn/SignUpPage/SignUppage';
import MainPage from './Frontend/PMP/pmp'; // Import your main page component
import store from './Frontend/ReduxStore/store';
import SignupSuccessPage from './Frontend/AuthenticationAndSignIn/SignUpPage/SignupSuccessPage';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignInPage />}></Route>
          <Route path="/login" element={<SignInPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/SignupSuccessPage" element={<SignupSuccessPage />}></Route>
          <Route path="main" element={<MainPage />}></Route>
        </Routes>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
