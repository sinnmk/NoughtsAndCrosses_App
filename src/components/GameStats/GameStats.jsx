import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, TableCell, TableRow, 
TableBody, Table, Card, CardContent, 
withStyles } from '@material-ui/core';
import Styles from './Styles';

class GameStats extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data:
      [
        {
        name: "",
        moves: [],
        score: 0,
        }
      ]
    };
  }

  render() {
    return (
      <Card className='game-stats'>
        <CardContent>
          <Typography className='game-stats' color="textSecondary" gutterBottom>
            Noughts+Crosses
        </Typography>
          <Typography variant="h5" component="h2">
            Stats
        </Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell numeric>Game#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell numeric>Moves</TableCell>
                <TableCell numeric>Time</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

GameStats.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(GameStats);
