import React, {useState} from 'react';
import RenderForm from './components/CreateUser/RenderForm';
import RenderUser from './components/DisplayUsers/RenderUser';

const usersList = [
  {id: '1', username: 'Jean', age: 24}, 
  {id: '2', username: 'onlyfans69', age: 19}];

function App() {
  const [user, setUser] = useState(usersList)

  const getUserData = (userData)=> {
    setUser(previous => ([...previous, userData]))
  }
  
  return (
    <div className="App">
     <RenderForm getUserData={getUserData}></RenderForm>
      <RenderUser users={user}></RenderUser>
    </div>
  );
}

export default App;
