/* eslint-disable */
import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({
  component: Component,
  isAuthenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => {
        return (isAuthenticated ? <Component {...props} /> : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        ))
      }}
    />
  );
}


const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: !!state.app.user,
  location: ownProps.location,
});

export default connect(mapStateToProps)(PrivateRoute);
