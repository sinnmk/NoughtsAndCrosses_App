import React, { Component } from 'react';
import Game from '../components/Game/Game'
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Setup from '../components/Setup/Setup'
import PropTypes from 'prop-types';
import { Button, IconButton, withStyles, AppBar, Tabs, Tab, Typography } from '@material-ui/core'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class NavigationTopBar extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Play Game" />
                        <Tab label="Setup" />
                        <Tab label="Log In" />
                        <Tab label="Register" />
                    </Tabs>
                    <Button color="inherit">Back</Button>
                </AppBar>
                {value === 0 && <TabContainer><Game/></TabContainer>}
                {value === 1 && <TabContainer><Setup/></TabContainer>}
                {value === 2 && <TabContainer><SignIn/></TabContainer>}
                {value === 3 && <TabContainer><SignUp/></TabContainer>}
            </div>
        );
    }
}

NavigationTopBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationTopBar);