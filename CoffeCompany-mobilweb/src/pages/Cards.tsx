import React from 'react'
import CardImage from "../images/card.webp"
import {Typography} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
      img:{
            height:"250px"
        },
        text:{
            padding:"16px",
            fontSize:"14px"
        },
        button:{
         color:"black",
         borderRadius:"16px",
         padding:"7px",
         marginLeft:"10px",
         marginRight:"4px",
        },
        body:{
            marginBottom:"50px"
        }
})

const Cards = () => {

    const classes=useStyles();

    return (
        <div className={classes.body}>
            <img src={CardImage} alt="" className={classes.img} />
            <Typography className={classes.text}>Get a free digital Starbucks Card when you join Starbucks® Rewards, or register a gift card you already have.</Typography>
                <button className={classes.button} style={{borderBlockColor:"#1E1E1E"}}>Sign in</button>
                <button className={classes.button} style={{  backgroundColor:"black",color:"#fff"}}>Join now</button> 
        </div>
    )
}

export default Cards
