// @flow
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import { history } from 'client/index';
import * as selectors from 'client/app/selectors';
import { MuiThemeProvider } from 'material-ui/styles';
import muiTheme from 'client/app/lib/muiTheme';
import PrivateRoute from 'client/app/components/PrivateRoute';
import Header from 'client/app/components/Header';
import Home from 'client/app/components/Home';
import AddBlockScreen from 'client/app/components/AddBlockScreen';
import ManageBlockScreen from 'client/app/components/ManageBlockScreen';
import MobileMenu from './MobileMenu';
import Toaster from './Toaster';

const rootStyles = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  flexGrow: 2
};

const hideHeaderPathnames = [

];

const App = ({
  isMenuVisible,
  isHeaderVisible,
  isToasterVisible,
  toasterMessage,
  toasterTitle
}) => (
  <ConnectedRouter history={history}>
    <MuiThemeProvider theme={muiTheme}>
      <div style={rootStyles}>
        {isMenuVisible && <MobileMenu />}
        {isToasterVisible && <Toaster message={toasterMessage as string} title={toasterTitle as string} />}

        <Header />
        <Switch>
          <Route exact path="/" component={Home as any} />
          <Route exact path="/add" component={AddBlockScreen as any} />
          <Route exact path="/manage" component={ManageBlockScreen as any} />
        </Switch>
      </div>
    </MuiThemeProvider>
  </ConnectedRouter>
);

const mapStateToProps = state => ({
  isMenuVisible: state.app.isMenuVisible,
  isToasterVisible: state.app.isToasterVisible,
  toasterMessage: state.app.toasterMessage,
  toasterTitle: state.app.toasterTitle
});

export default connect(mapStateToProps)(App as any);
