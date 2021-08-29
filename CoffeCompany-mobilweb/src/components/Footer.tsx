import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { List,ListItem } from '@material-ui/core';
import PinterestIcon from '@material-ui/icons/Pinterest';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
    list: {
        display:"inline",
        color:"black"
    }
})

const Footer = () => {

    const classes=useStyles();

      return (
    <div>
        <List style={{display:"flex"}}>
            <ListItem  >
                <TwitterIcon style={{padding:"6px"}} />
                <InstagramIcon style={{padding:"6px"}}/>
                <FacebookIcon style={{padding:"6px"}} />
                <YouTubeIcon style={{padding:"6px"}}/>
                <PinterestIcon  style={{padding:"6px"}}/>
            </ListItem>
        </List>

      <ul className={classes.list}>
          <li style={{padding:"6px"}}>Privacy Policy</li>
          <li style={{padding:"6px"}}>Terms of use</li>
          <li style={{padding:"6px"}}>CA Supply Chain Act</li>
          <li style={{padding:"6px"}}>Submit Your Idea</li>
          <li style={{padding:"6px"}}>Cookie Preferences</li>
      </ul>
      <p style={{fontSize:"14px",color:"#707070"}}>© 2021 Starbucks Coffee Company. All rights reserved.</p>
    </div>

    )
 
}

export default Footer
