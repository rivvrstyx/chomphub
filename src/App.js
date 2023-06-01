import React from "react";
import "./App.css";
// import "./firebase/config";
import { Route, BrowserRouter, Link, Outlet, Navigate, Routes } from "react-router-dom";
// import { UserProvider } from "./firebase/UserProvider";

import "bootstrap/dist/css/bootstrap.css";
// import PrivateRoute from "./router/PrivateRoute";
// import ProfileRedirect from "./router/ProfileRedirect";
// import AdminRoute from "./router/AdminRoute";
import HomePage from "./pages/HomePage";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    // <UserProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            {/* <ProfileRedirect exact path="/signup" component={Signup} /> */}
            {/* <ProfileRedirect exact path="/login" component={Login} /> */}         
            {/* <PrivateRoute exact path="/profile/:id" component={Profile} /> */}
            {/* <AdminRoute exact path="/users" component={Users} /> */}
            <Route exact path="/" element={<Layout />}>

            <Route index element={<HomePage />} />
            </Route>
          </Routes>
          {/* 404 page */}
          {/* <Route path="*" element={<NoMatch />} /> */}

        </div>
      </BrowserRouter>
    // </UserProvider>
  );
}

function Layout() {
  return (
    <div>
   <MainHeader />

      <Outlet />
    </div>
  );
}

export default App;
