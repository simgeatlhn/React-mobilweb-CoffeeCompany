import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,Divider,ListItemText,ListItemAvatar,Avatar} from '@material-ui/core';
import drink1 from "../images/drink1.webp"
import drink2 from "../images/drink2.webp"
import drink3 from "../images/drink3.webp"

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

const Drinks=() =>{

  const classes = useStyles();

  return (
    <List className={classes.root}>

      <h1>Menu</h1>
      <h2>Drinks</h2>

      <ListItem alignItems="center" >
        <ListItemAvatar>
          <Avatar alt="" src={drink1} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary="Hot Coffees"
        />
      </ListItem>

       <Divider variant="inset" component="li" />

        <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="" src={drink2} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary="Hot Teas"
        />
      </ListItem>

      <Divider variant="inset" component="li" />

        <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="" src={drink3} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary="Frappuccino® Blended Beverages"
        />
      </ListItem>
   
    </List>
  );
}

export default Drinks
