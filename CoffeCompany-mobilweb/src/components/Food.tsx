import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,Divider,ListItemText,ListItemAvatar,Avatar} from '@material-ui/core';
import food1 from "../images/food1.webp"
import food2 from "../images/food2.webp"
import food3 from "../images/food3.webp"

const useStyles = makeStyles({
     root: {
      width: '100%',
      maxWidth: '100ch',
    },
    avatar:{
        width:"90px",
        height:"90px",
        marginRight:"14px"
    }
});

const Food=() =>{

  const classes = useStyles();

  return (
    <List className={classes.root}>

      <h2>Food</h2>

      <ListItem alignItems="center" >
        <ListItemAvatar>
          <Avatar alt="" src={food1} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary="Hot Breakfast"
        />
      </ListItem>

       <Divider variant="inset" component="li" />

        <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="" src={food2} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary="Bakery"
        />
      </ListItem>

      <Divider variant="inset" component="li" />

        <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="" src={food3} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary="Lunch"
        />
      </ListItem>
   
    </List>
  );
}

export default Food