import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto'
  },
});

function CardList({recipes:{recipe:{label,image,totalTime,ingredients,uri}}}) {
    const classes = useStyles();
    const trimStr = (str)=>{
      if(str.length >= 18){
        return str.slice(0,18) + '...';
      }else{
        return str;
      }
    }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={label}
          height="140"
          image={image}
          title={label}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {trimStr(label)}
          </Typography>
         {`Total Time ${totalTime} Min`}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" color="secondary">
          <Link to={{pathname:`/recipe/${label}`,state:{label,image,totalTime,ingredients,uri}}}>View Recipe</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardList
