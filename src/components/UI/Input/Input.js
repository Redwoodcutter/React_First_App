import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.inputElement];
    let validationError = null;

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
        validationError = <p>Please enter a valid value!</p>;
    }

    switch (props.elementType){
        case('input'):
            inputElement =<input className={inputClasses.join(' ')}
            {...props.elementConfig} 
            value={props.value} 
            onChange={props.changed}
            placeholder = {props.elementConfig.placeholder}/>;
            break;
        case('textarea'):
            inputElement= <textarea className={inputClasses.join(' ')}
            {...props.elementConfig} 
            value={props.value} onChange={props.changed}
            placeholder = {props.elementConfig.placeholder}/>;
            break;
        case('select'):
            inputElement= (
            <select className={inputClasses.join(' ')}
                value={props.value} 
                onChange={props.changed}
                > 
                {props.elementConfig.options.map(option=>(
                    <option key={option.value} 
                        value={option.value} 
                        onChange={props.changed}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            );
            break;
        default:
            inputElement = <input 
            className={inputClasses.join(' ')}
            {...props.elementConfig} 
            value={props.value} 
            onChange={props.changed}
             placeholder = {props.elementConfig.placeholder}
            
            />;
    }
    return(
        <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
        {validationError}
    </div>
    );
};

export default input;