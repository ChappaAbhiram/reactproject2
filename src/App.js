import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList'
function App() {
  const [userslist,setuserslist]=useState([]);
  const AddtoArray=(username,userAge)=>{
  setuserslist((prevuserslist)=>{
    return [...prevuserslist,
      {name: username , age:userAge,id:Math.random().toString() },
    ];
  });
  };
  return (
    <div>
    <AddUser onAddUser={AddtoArray}/>
    <UserList users={userslist}/>
    </div>
  );
}

export default App;
