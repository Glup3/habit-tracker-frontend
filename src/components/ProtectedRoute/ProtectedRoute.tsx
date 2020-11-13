import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function isAuthenticated() {
  //TODO implement logic
  return true;
}

interface ProtectedRoutePropsType {
  component: React.ElementType;
  path: string;
}

function ProtectedRoute({ component: Component, ...rest }: ProtectedRoutePropsType) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated()) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                // eslint-disable-next-line react/prop-types
                from: props.location
              }
            }}
          />
        );
      }}
    />
  );
}

export default ProtectedRoute;
