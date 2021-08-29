import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link,Dialog ,DialogActions,DialogContent,DialogContentText,Button} from '@material-ui/core';
import Drinks from "../components/Drinks"
import Food from "../components/Food"
import Merchandise from '../components/Merchandise'


const useStyles = makeStyles({
     body: {
         marginBottom:"100px"   
    },
    icon:{
        color:"#fff",
        float:"right",
        fontSize:"35px",
    },
    link:{
        color:"#fff",
        marginRight:"50px"
    },
    tab:{
        width:"100%",
        height:"50px",
        backgroundColor:"#1E3932",
        padding:"14px",
        marginTop:"6px",
        position: 'sticky' //??
    }
});

const Products = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClickClose = () => {
      setOpen(false);
    };

    return (
        <div className={classes.body}>
            <Drinks />        
            <Food />
            <Merchandise />
            <div className={classes.tab}>

                {/* //Bottom */}
                <Link className={classes.link}>For item availability, choose a store</Link>
                
                {/* //Simple Modal */}
                <Button   onClick={handleClickOpen}>
                  <LocalMallIcon className={classes.icon} />   
                </Button>

                <Dialog
                  open={open}
                  onClose={handleClickClose}
                >
        
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{fontSize:"14px",padding:"6px"}}>
                      <strong>Please select a store before continuing to the cart.</strong> 
                    </DialogContentText>
                  </DialogContent>

                   <DialogActions>
                     <Button onClick={handleClickClose} style={{backgroundColor:"#fff",color:"#00a862",textTransform: "none",borderRadius:"20px"}}>
                       Cancel
                     </Button>
                     <Button onClick={handleClickClose} style={{backgroundColor:"#00a862",color:"#fff",borderRadius:"20px",textTransform: "none"}}>
                       Select Store
                     </Button>
                   </DialogActions>
                </Dialog> 
            </div>
        </div>
    )
}

export default Products
