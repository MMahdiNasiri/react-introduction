import React from 'react';
import photo from '../../../assets/image/personal2.jpg';
import classes from './personal.css'


const personal = () =>{
    return(
        <div className={classes.personal}>
            <img src={photo}  alt='me' className={classes.myimg} />
            <p>hey I'm Mohammad Mahdi Nasiri. you can call me Mahdi.
                I'm studying at "Elm O Farhang" university and
                I'm looking for a part-time job to upgrade my skills 
                by connecting with professional programmers.
            </p>
        </div>
    )
}

export default personal;