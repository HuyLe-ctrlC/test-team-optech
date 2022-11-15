import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { HomePage } from "./components/HomePage/HomePage";
import Login from "./components/Users/Login/Login";
import { Register } from "./components/Users/Register/Register";
import * as ROUTES from "./constants/routes/routes";
import { Apply } from "./components/Apply/Apply";
import { Form } from "./components/Form/Form";
import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectedRoute";
import { MessageApply } from "./components/Apply/MessageApply";

function App() {
  return (
    <div className="App vh-100">
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />}>
            <Route
              path={ROUTES.TABLE}
              element={
                <PrivateProtectRoute path={ROUTES.TABLE} exact>
                  <Form />
                </PrivateProtectRoute>
              }
            />
            <Route path={ROUTES.APPLY} element={<Apply />} />
          </Route>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.APPLY_MESSAGE} element={<MessageApply />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
