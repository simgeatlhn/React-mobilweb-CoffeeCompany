import React,{useState} from 'react';
import {Button,Dialog,DialogActions,DialogContent,DialogContentText} from '@material-ui/core';

//ConfirmDialog-child, SignIn-parent

const AlertDialog:React.FC=()=> {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button   onClick={handleClickOpen} style={{ textTransform: "none",color:"#00a862"}}>
        Details 
      </Button>

      <Dialog
        open={open}
        onClose={handleClickClose}
      >
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Checking this box will reduce the number of times you’re asked to sign in. To keep your account secure, use this option only on your personal devices.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClickClose} style={{ textTransform: "none",color:"#00a862"}}>
            Got it
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}

export default AlertDialog



