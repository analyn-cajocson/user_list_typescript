import React, {useState} from 'react';
import './App.css';

const App: React.FC = () => {

  interface UserInt {
    name: string;
    age: string;
    job: string;
  }

  const [usersState, setUsersState] = useState<{ currentUser: UserInt }>({
    currentUser: {
      name: "",
      age: "",
      job: ""
    }
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) :void => {
    setUsersState({
      currentUser: {
        ...usersState.currentUser,
        [e.target.name] : e.target.value
      }
    })
  }

  return (
    <div className="container">
      <h1>React with Typescript</h1>

      <form>
        <label htmlFor="userName">Name:</label>
        <input type="text"
          id="userName"
          name="name"
          value={usersState.currentUser.name}
          onChange={onChangeHandler}
        />

        <label htmlFor="userAge">Age:</label>
        <input type="number"
          id="userName"
          name="age"
          value={usersState.currentUser.age}
          onChange={onChangeHandler}
        />

        <label htmlFor="userJob">Job:</label>
        <input type="text"
          id="userJob"
          name="job"
          value={usersState.currentUser.job}
          onChange={onChangeHandler}
        />

        <button type="submit">Add user</button>

      </form>
    </div>
    
  );
}

export default App;
