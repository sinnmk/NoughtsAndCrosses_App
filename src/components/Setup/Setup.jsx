import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {Drawer, AppBar, Toolbar, List, Typography, Divider} from '@material-ui/core'

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: 440,
        zIndex: 1,
        overflow: 'hidden',
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        'appBar-left': {
            marginLeft: drawerWidth,
        },
        'appBar-right': {
            marginRight: drawerWidth,
        },
        drawerPaper: {
            position: 'relative',
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing.unit * 3,
        }
    }
});

class SetupPage extends Component {
    state = {
        anchor: 'left',
    };

    handleChange(event) {
        this.setState({
            anchor: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        const { anchor } = this.state;

        const drawer = (
            <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }} anchor={anchor}>
                <div className={classes.toolbar} />
                <Divider />
                <List></List>
                <Divider />
                <List></List>
            </Drawer>
        )

        let before = null;
        let after = null

        if (anchor === 'left') {
            before = drawer;
        } else {
            after = drawer;
        }

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
                    >
                        <Toolbar>
                            <Typography variant="h6" color="inherit" noWrap>
                            Setup Game
                </Typography>
                        </Toolbar>
                    </AppBar>
                    {before}
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Typography>{'This is where setup is going'}</Typography>
                    </main>
                    {after}
                </div>
            </div>
        );
    }
}

SetupPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SetupPage);