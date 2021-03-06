import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Card from './card/Card';

const style = () => ({
  root: {
    margin: 50,
  },
});

const App = ({ classes }) => (
  <React.Fragment>
    <CssBaseline />
    <div className={classes.root}>
      <Card />
    </div>
  </React.Fragment>
);

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(style)(App);
