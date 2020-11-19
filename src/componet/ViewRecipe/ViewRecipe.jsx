import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        backgroundColor: 'red',
    },
    card: {
        maxWidth: 545,
        marginTop: '50px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }),
);
function ViewRecipe({location:{state:{label,image,totalTime,ingredients,uri}}}) {
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
        <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image}
        title={label}
      />
      <CardContent>
        <Typography variant="h5" component="h5">
          {label}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" component="h6">Ingredients</Typography>
        {ingredients.map(ingredients =><Typography paragraph key={uuidv4()}>{ingredients.text}</Typography>)}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ViewRecipe
