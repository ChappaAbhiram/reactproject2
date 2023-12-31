import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal'
const AddUser = (props)=>{
    const nameInputref = useRef();
    const ageinputref = useRef();
    const collegeInputref = useRef();
    // const [formName,setFormName] = useState('');
    // const [formAge,setFormAge] = useState('');
    const [error,setError]= useState();
    const addUserHandler=(event)=>{
     event.preventDefault();
     const enteredname = nameInputref.current.value;
     const enteredage = ageinputref.current.value;
     const enteredclgname = collegeInputref.current.value;
     if(enteredname.trim().length === 0 || enteredage.trim().length === 0 || enteredclgname.trim().length===0){
        setError({
            title : 'Invalid input',
            message:'Please enter valid value(non-empty-values)'
        });
        return;
     }
     if(+enteredage < 1){
        setError({
            title : 'Invalid input',
            message:'Please enter valid age(>0)'
        });
        return;
     }
     props.onAddUser(enteredname,enteredage,enteredclgname);
     nameInputref.current.value='';
     ageinputref.current.value='';
     collegeInputref.current.value='';
    //  setFormName('');
    //  setFormAge('');
    };
    // const userNameChangeHandler = (event) =>{
    //     setFormName(event.target.value);
    // };
    // const userAgeHandler = (event)=>{
    //     setFormAge(event.target.value);
    // }
    const errorHandler = () =>{
        setError(null);
    }
return (
    <React.Fragment>
    {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        id="name" 
        // value={formName} 
        // onChange={userNameChangeHandler}
        ref={nameInputref}
        >
        </input>
        <label htmlFor="age">Age (Years)</label>
        <input 
        type="number" 
        id="age" 
        // value={formAge} 
        // onChange={userAgeHandler}
        ref={ageinputref}
        >
        </input>
        <label htmlFor="clgname">College Name</label>
        <input 
        type="text" 
        id="clgname" 
        // value={formName} 
        // onChange={userNameChangeHandler}
        ref={collegeInputref}
        >
        </input>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </React.Fragment>
);
};
export default AddUser;