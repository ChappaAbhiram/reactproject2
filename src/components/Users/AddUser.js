import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal'
const AddUser = (props)=>{
    const [formName,setFormName] = useState('');
    const [formAge,setFormAge] = useState('');
    const [error,setError]= useState();
    const addUserHandler=(event)=>{
     event.preventDefault();
     if(formName.trim().length === 0 || formAge.trim().length === 0){
        setError({
            title : 'Invalid input',
            message:'Please enter valid value(non-empty-values)'
        });
        return;
     }
     if(+formAge < 1){
        setError({
            title : 'Invalid input',
            message:'Please enter valid age(>0)'
        });
        return;
     }
     props.onAddUser(formName,formAge);
     setFormName('');
     setFormAge('');
    };
    const userNameChangeHandler = (event) =>{
        setFormName(event.target.value);
    };
    const userAgeHandler = (event)=>{
        setFormAge(event.target.value);
    }
    const errorHandler = () =>{
        setError(null);
    }
return (
    <React.Fragment>
    {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={formName} onChange={userNameChangeHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={formAge} onChange={userAgeHandler}></input>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </React.Fragment>
);
};
export default AddUser;