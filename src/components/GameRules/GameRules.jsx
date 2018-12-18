import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card, CardContent } from '@material-ui/core';
import Styles from './GameRulesStyles';

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card} style={{maxWidth: '550px', margin: 'auto'}}>
      <CardContent>
        <div>
          <div data-id="game-title">
            Noughts + Crosses
          </div>
          <div data-id="sub-title">
            Game Rules
          </div>
          <div data-id="game-rules">
            The rules for playing noughts and crosses are very simple.
            Each player takes it in turn to place their X or O into one
            of the empty squares in the grid by clicking on it.
            To win the game get three of your symbols in a
            line horizontally, vertically or diagonally.
            For the first game, X begins.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(SimpleCard);

