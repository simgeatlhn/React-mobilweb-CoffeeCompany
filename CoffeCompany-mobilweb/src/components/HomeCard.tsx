import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Typography} from '@material-ui/core';
import HomeCard from "../images/home.webp"

const useStyles = makeStyles({
  card:{
    marginTop:"180px"
  },
  button:{
    color:"#fff",
    backgroundColor:"#00a862",
    fontSize:"22px",
    borderRadius:"20px",
    border:"none",
    marginLeft:"4px"
  }
})

const Cards = () => {

    const classes=useStyles();

    return (
    <div>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="250"
          image={HomeCard}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography >
            <strong>Your fall routine made easy</strong>
          </Typography>
          <Typography style={{fontSize:"14px"}}>
          Spice things up—order ahead. Join Starbucks® Rewards and order, pay and pick up with the app.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <button className={classes.button}>Join now</button> 
      </CardActions>
    </Card>     
    </div>
    )
}

export default Cards
