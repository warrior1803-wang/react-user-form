import React from 'react';
import classes './Card.module.css';
const Card = props =>{
    return (<div>
<div className='classes.card'>{props.children}</div>
    </div>)
}
export default Card