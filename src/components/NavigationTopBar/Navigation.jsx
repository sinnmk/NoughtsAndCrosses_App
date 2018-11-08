import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Tabs, Tab, Typography } from '@material-ui/core'
import {Settings} from '@material-ui/icons';
import Styles from './NavigationStyles';

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
                <AppBar position="static" color="default">
                    <Tabs value={value} onChange={this.handleChange} centered>
                        <Tab label="Game Setup" icon={<Settings/>}/>
                        {/* <Tab label="Rules" icon={ <Help/> } />
                        <Tab label="Log In" icon={ <AccountCircle/> } />
                        <Tab label="Register" icon={ <GroupAdd/> } /> */}
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><Game/></TabContainer>}
                {/* {value === 1 && <TabContainer><Rules/></TabContainer>}
                {value === 2 && <TabContainer><SignIn/></TabContainer>}
                {value === 3 && <TabContainer><SignUp/></TabContainer>} */}
            </div>
        );
    }
}

NavigationTopBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(NavigationTopBar);