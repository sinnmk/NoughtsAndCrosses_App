import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Styles from './Styles';


function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Noughts+Crosses
        </Typography>
        <Typography variant="h5" component="h2">
          Game Rules
        </Typography>
        <Typography component="p">
          The rules for playing noughts and crosses are very simple.
          Each player takes it in turn to place their X or O into one
          of the empty squares in the grid by clicking on it.
          To win the game get three of your symbols in a
          line horizontally, vertically or diagonally.
          For the first game, X begins.
        </Typography>
      </CardContent>
      <CardActions>
        <Button id="card-back-button" size="small">Back</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(SimpleCard);

