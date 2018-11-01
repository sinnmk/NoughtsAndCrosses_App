const styles = theme => ({
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
  group: {
      margin: `${theme.spacing.unit}px 0`,
  },
  pos: {
    marginBottom: 12,
    marginRight: 55,
    marginLeft: 55,
    display: "flex", 
  },
});

export default styles;