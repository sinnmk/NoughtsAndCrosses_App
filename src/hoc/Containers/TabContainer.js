import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class TabContainer extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        
    }

    render(){
        return (
            <Typography component="div" style={{ padding: 8 * 3 }}>
                {this.props.children}
            </Typography>
        );
    }
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TabContainer;