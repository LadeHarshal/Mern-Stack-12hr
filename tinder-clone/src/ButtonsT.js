import React from 'react';
import "./ButtonsT.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

document.body.style.transition ="all 1s";
function ButtonsT() {
  return (
    <div className='tinderButton'>

        <IconButton className='RepeatB' onClick={()=>{
          window.location.reload();
        }} >
          <ReplayIcon fontSize='large'/>
        </IconButton>

        <IconButton className='LeftB'>
          <CloseIcon fontSize='large'/>
        </IconButton>

        <IconButton className='StarB' onClick={()=>{
          console.log("Added to favorite.");
        }}>
          <StarRateIcon fontSize='large'/>
        </IconButton>

        <IconButton className='RightB'>
          <FavoriteIcon fontSize='large'/>
        </IconButton>

        {/* <IconButton className='Lighting'>
          <FlashOnIcon fontSize='large'/>
        </IconButton> */}

    </div>
  )
}


export default ButtonsT