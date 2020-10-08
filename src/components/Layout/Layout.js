import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './layout.css';
const layout= (props) => (
    <Aux>
        <div>
            toolbar, sidedivider, backdrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;