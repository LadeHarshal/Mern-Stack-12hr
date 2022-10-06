import React from 'react';
import './Header.css';
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className='Header'>

        <IconButton>
            <PersonIcon fontSize='large' className='profileclick' />
        </IconButton>


        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmaq3vIh8KL7yx1myRJUvBS98-fJ9YLqJvnVSpM6L3pLKsVHf1o3kZ__x4opIWhtfYPws&usqp=CAU' alt='' className='logocenter'/>

        
        <IconButton>
        <ForumIcon className='msgs'/>
        </IconButton>

    </div>
  )
}

export default Header