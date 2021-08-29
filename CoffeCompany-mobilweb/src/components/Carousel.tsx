import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {images} from "../data/carouselData" //data
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Typography } from '@material-ui/core';

const useStyles=makeStyles({
carouselInner: {
    height: "250px",
    width:"250", 
    backgroundSize: 'cover', //img alanı kaplaması için
},
left: {
    height: "20%",
    cursor: "pointer",
},
carouselRight :{ 
    height: "20%",
    cursor: "pointer",
},
button:{
    backgroundColor:"black",
    color:"#fff",
    borderRadius:"40px",
    fontSize:"22px",
     marginRight:"20px",
     marginTop:"14px"
},
button2:{
    backgroundColor:"#fff",
    color:"black",
    borderRadius:"20px",
    fontSize:"22px"
}
});

const Carousel = () => {

    const classes=useStyles();

    const [currentImg,setCurrentImg]= useState(0);

    return (
    <div>
      <div
        className={classes.carouselInner}
        style={{ backgroundImage: `url(${images[currentImg].img})`,borderRadius:"24px" }}
      >  

      {/* //Right */}
        <div
          className={classes.carouselRight}
          onClick={() => {
            currentImg < images.length - 1 && setCurrentImg(currentImg + 1);
          }}
        >
        <ArrowForwardIosIcon style={{ fontSize: "20",color:"black",marginLeft:"350px",marginTop:"100px"}} />
        </div>

        {/* //Left */}
        <div
          className={classes.left}
          onClick={() => {
            currentImg > 0 && setCurrentImg(currentImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: "20",color:"black",padding:"6px",marginTop:"45px" }} />
        </div>


        {/* //Text */}
        <div>
          <Typography style={{marginTop:"180px"}}>{images[currentImg].subtitle}</Typography>
        </div>

        {/* //Button */}

        <button className={classes.button}>Join in</button>
        <button className={classes.button2}>Learn more</button>

      </div>
    </div>
        
    )
}

export default Carousel


// import React,{useState} from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import {images} from "../data/carouselData"
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// const useStyles=makeStyles({
//     carouselInner: {
//     height: "100%",
//     width: "100%"
//    },

//     left: {
//     flex: "5%",
//     height: "100%",
//     bgcolor: "#1E1E1E",
//     display: "grid",
//     color: "#ffff",
//     cursor: "pointer",
// },
//    center :{
//     flex: "80%",
//     height: "100%",
//     display: "grid",
//     textAlign:"justify",
// },
//  carouselRight :{
//     flex: "5%",
//     height: "100%",
//     bgcolor: "#1E1E1E",
//     display: "grid",
//     color: "#ffff",
//     cursor: "pointer",
// }
// });

// const Carousel = () => {

//     const classes=useStyles();

//     const [currentImg,setCurrentImg]= useState(0);

//     return (
//     <div>
//       <div
//         className={classes.carouselInner}
//         style={{ backgroundImage: `url(${images[currentImg].img})` }}
//       >
//         <div
//           className={classes.left}
//           onClick={() => {
//             currentImg > 0 && setCurrentImg(currentImg - 1);
//           }}
//         >
//           <ArrowBackIosIcon style={{ fontSize: "30",color:"black" }} />
//         </div>
//         <div className={classes.center}>
//           <p>{images[currentImg].subtitle}</p>
//         </div>
//         <div
//           className={classes.carouselRight}
//           onClick={() => {
//             currentImg < images.length - 1 && setCurrentImg(currentImg + 1);
//           }}
//         >
//           <ArrowForwardIosIcon style={{ fontSize: "30",color:"black" }} />
//         </div>
//       </div>
//     </div>
        
//     )
// }

// export default Carousel



