import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
  card: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 4px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginRight: 55,
    marginLeft: 55
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Noughts+Crosses
        </Typography>
        <Typography variant="h5" component="h7">
        Stats
        </Typography>
        <Typography component="p">
        <TableHead>
          <TableRow>
            <TableCell numeric>Game#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell numeric>Moves</TableCell>
            <TableCell numeric>Time</TableCell>
          </TableRow>
        </TableHead>
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

export default withStyles(styles)(SimpleCard);
