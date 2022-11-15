// import React from "react";
import { useSelector } from "react-redux";
// import { Route, Navigate } from "react-router-dom";

// export const PrivateProtectRoute = ({ component: Component, ...rest }) => {
//   //check if user is loggin
//   const user = useSelector((state) => state?.users);
//   const { userAuth } = user;
//   return (
//     <Route
//       {...rest}
//       render={() =>
//         userAuth ? <Component {...rest} /> : <Navigate to="/login" />
//       }
//     />
//   );
// };
import { Navigate } from "react-router-dom";
import React from "react";

export default function PrivateProtectRoute({ children }) {
  const user = useSelector((state) => state?.users);
  const { userAuth } = user;
  if (userAuth) {
    return React.cloneElement(children);
  }
  if (!userAuth) {
    return (
      <Navigate
        to={{
          pathname: "/login",
        }}
        replace={true}
      />
    );
  }
  return null;
}
