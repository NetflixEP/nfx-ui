import React from "react";
import './App.css';
import LoginScreen from './screens/LoginScreen';
import SignInScreen from "./screens/SignInScreen";
import HomeScreen from "./screens/HomeScreen";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import SignUpScreen from "./screens/SignUpScreen";


function App() {
  return (
      <div className="app">
          <Router>
              <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="/login" element={<LoginScreen />} />
                  <Route path="/signIn" element={<SignInScreen />} />
                  <Route path="/signUp" element={<SignUpScreen />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
