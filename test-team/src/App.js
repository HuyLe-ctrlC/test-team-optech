import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { HomePage } from "./components/HomePage/HomePage";
import { Login } from "./components/Users/Login/Login";
import { Register } from "./components/Users/Register/Register";
import { TablePage } from "./components/TablePage/TablePage";
import * as ROUTES from "./constants/routes/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.TABLE} element={<TablePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
