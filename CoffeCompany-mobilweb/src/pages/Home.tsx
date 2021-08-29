import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography} from "@material-ui/core"
import Carousel from "../components/Carousel"
import HomeCard from '../components/HomeCard';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    button:{
        backgroundColor:"#00a862",
        color:"#fff",
        borderRadius:"500px",
        overflow:"hidden",
        position:"relative",
        padding:"10px",
        fontSize:"1.1rem",
        textAlign:"center",
        float:"right",
        marginTop:"100px"
    },
    text:{
        fontSize:"22px",
        padding:"18px"
    }
})


const Home = () => {

    const classes=useStyles();

    return (
        <div>
          <Typography className={classes.text}>STARBUCKS® REWARDS</Typography>
          <Carousel/>
          <HomeCard/>
            <Link to={"./products"}>
                    <Button className={classes.button}> <strong>Start an Order</strong> </Button>  
            </Link> 
        </div>
    )
}

export default Home
