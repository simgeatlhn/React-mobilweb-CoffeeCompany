import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Drawer,List,ListItem,ListItemText,Button,AppBar,Toolbar,Typography} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Logo from "../images/logo.png";
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
     button:{
         color:"black",
         borderRadius:"12px",
         padding:"5px",
         marginLeft:"4px",
         marginRight:"4px",
         border:"solid",
         textTransform: "none" //button isimlerinin büyük harfle yazılmasını engellemek için
     },
     size:{
         width:"50px",
         float:"left",
         cursor:"pointer",
     },
     icon:{
         cursor:"pointer",
         marginLeft:"240px"
     },
     text:{
         color:"#1E1E1E",
         padding:"20px",
         fontSize:"24px"
     }
});

//style={{width:250}}

const Navbar = () => {

    const [open,setOpen]=useState(false)

    const classes=useStyles();


    const list=() =>{
        return(
        <div style={{width:"700"}} >
            <List>
                {/* //SOR!! */}
                <Button onClick={()=>setOpen(false)}><CloseIcon/></Button>
                {["Orders","Gift"].map((label,index)=>(
                    <ListItem button key={index}>
                        {/* <ListItemIcon><MenuIcon/></ListItemIcon> */}
                        <ListItemText primary={label}/>
                    </ListItem>
                   
                ))}

                <Link to={"./products"}>
                    <Button style={{textTransform: "none", marginLeft:"6px"}}> All Products</Button>
                   
                </Link> 
                <br />

                <Link to={"./card"}>
                    <Button style={{textTransform: "none", marginLeft:"4px"}}> Cards</Button>
                </Link> 
                <br />

                <Link to={"./sign"}>
                    <Button className={classes.button} variant="contained">Sign in</Button>  
                </Link> 

                <Link to={"./join"}>
                    <Button className={classes.button} style={{  backgroundColor:"black",color:"#fff"}} >Join now</Button>  
                </Link>

                <br />
                <Typography style={{padding:"15px"}}><LocationOnIcon/> <strong>Find a Store</strong> </Typography>    
            </List>
 
        </div>
        )
    }

    return (
        <div>

            {/* //App Bar */}
            <AppBar style={{ background: '#fff',position:"static" }}>
                <Toolbar> 
                    <Link to={"./"}>
                        <img src={Logo} alt="logo" className={classes.size}/>
                    </Link>      
                    <Button className={classes.icon}  onClick={()=>setOpen(true)}><MenuIcon/></Button>    
                </Toolbar>
            <Typography variant="h1" className={classes.text}> <strong>Good Evening.🌙</strong> </Typography>
               
            </AppBar>

            {/* //Drawe Side Nav */}
            <Drawer open={open} anchor={"right"} onClose={()=>setOpen(false)}>
                {list()}
            </Drawer>   

        </div>
    )
}

export default Navbar

  


