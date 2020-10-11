import React from 'react'
import classes from './Controls.css' 
const Controls = (props) => (
    <div className={classes.Controls}>
        <div>{props.ingredientLabel}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>

);

export default Controls;