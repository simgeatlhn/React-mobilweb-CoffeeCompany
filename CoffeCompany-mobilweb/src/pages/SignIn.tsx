import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles';
import {TextField, Typography,Checkbox,FormControlLabel,Button} from "@material-ui/core"
import ConfirmDialog from '../components/ConfirmDialog';

const useStyles = makeStyles({
    title:{
        fontSize:"1.4rem",
        color:"#1E1E1E",
        textAlign:"center",
        fontWeight:700,
        marginTop:"20px"
    },
    input:{
        padding:"10px",
        textAlign:"center",
        width: 350,
    },
    body:{
        marginTop:"40px"
    },
    checkbox:{
        color:"#00a862"
    }
})

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#00a862',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00a862',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#1E1E1E',
      },
      '&:hover fieldset': {
        borderColor: '#1E1E1E',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#00a862',
      },
    },
  },
})(TextField);

const SignIn:React.FC= () => {

    const classes=useStyles();

    const [checked,setChecked]=useState(true);
    const handleClick=(e:any)=>{
        setChecked(e.target.checked)
    }



    return (
        <div>

            {/* //title */}
            <Typography className={classes.title}> <strong>Sign in or create an account</strong>  </Typography>

            {/* //input */}

            <form  noValidate className={classes.body}>
                <CssTextField
                  label="Username or email address"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  className={classes.input}
                />

                <CssTextField
                  label="Password"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  className={classes.input}
                />
            </form>  

           {/* //checkbox */}
            <FormControlLabel
              control={<Checkbox  
                checked={checked}
                onChange={handleClick}
                style={{
                 color: "#00a862",
                 transform: "scale(1.5)", //checkbox size
                 padding:"22px"
                }}
              />}
              label="Keep me Signed in."
            /> 

            {/* Simple Modal */}
            <ConfirmDialog/>

            <Button style={{color:"#00a862",textTransform: "none"}}>Forgot your username?</Button>
            <br />
            <Button style={{color:"#00a862",textTransform: "none"}}>Forgot your password?</Button>
    
        </div>
    )
}

export default SignIn
