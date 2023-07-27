import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList'
function App() {
  const [userslist,setuserslist]=useState([]);
  const AddtoArray=(username,userAge,userClg )=>{
  setuserslist((prevuserslist)=>{
    return [...prevuserslist,
      {name: username , age:userAge, clgname: userClg, id:Math.random().toString() },
    ];
  });
  };
  return (
    <React.Fragment>
    <AddUser onAddUser={AddtoArray}/>
    <UserList users={userslist}/>
    </React.Fragment>
  );
}

export default App;
