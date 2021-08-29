import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,Divider,ListItemText,ListItemAvatar,Avatar} from '@material-ui/core';
import merchandise1 from "../images/merchandise1.jpg"
import merchandise2 from "../images/merchandise2.jpg"

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

const Merchandise=() =>{

  const classes = useStyles();

  return (
    <List className={classes.root}>

      <h2>Merchandise</h2>

      <ListItem alignItems="center" >
        <ListItemAvatar>
          <Avatar alt="" src={merchandise1} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary="Cold Cups"
        />
      </ListItem>

       <Divider variant="inset" component="li" />

        <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="" src={merchandise2} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary="Tumblers"
        />
      </ListItem>

      <Divider variant="inset" component="li" />

   
    </List>
  );
}

export default Merchandise