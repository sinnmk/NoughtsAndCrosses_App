const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    grid: {
        width: 150, 
        height: 300
    },
    subheader: {
        width: '100%'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)'
    },
    paper: {
        borderTopWidth: 1, 
        borderColor: 'black', 
        borderStyle: 'solid',
        paddingTop: theme.spacing.unit*3,
        paddingBottom: theme.spacing.unit*3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});
export default styles;