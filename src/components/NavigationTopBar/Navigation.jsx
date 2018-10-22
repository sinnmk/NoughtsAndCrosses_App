import React, { Component } from 'react';
import Game from '../Game/Game';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Rules from '../GameRules/GameRules';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Tabs, Tab, Typography } from '@material-ui/core'

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
                        <Tab label="Play Game"/>
                        <Tab label="Rules" />
                        <Tab label="Log In" />
                        <Tab label="Register" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><Game/></TabContainer>}
                {value === 1 && <TabContainer><Rules/></TabContainer>}
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