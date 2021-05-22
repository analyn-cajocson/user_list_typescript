import React, {useState} from 'react';
import './App.css';

const App: React.FC = () => {

  interface UserInt {
    name: string;
    age: string;
    job: string;
  }

  interface AllUsersInt {
    currentUser: UserInt;
    allUsers: Array<UserInt>;
  }

  const [usersState, setUsersState] = useState<AllUsersInt>({
    currentUser: {
      name: "",
      age: "",
      job: ""
    },

    allUsers: []
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    setUsersState({
      ...usersState,
      currentUser: {
        ...usersState.currentUser,
        [e.target.name] : e.target.value
      }
    })
  }

  const submitForm = (e : React.SyntheticEvent) : void => {
    e.preventDefault();

    setUsersState({
      currentUser: {
        name: "",
        age: "",
        job: ""
      },
      allUsers: [
        ...usersState.allUsers,
        usersState.currentUser
      ]
    })
  }

  const allUsers = usersState.allUsers.map((user, i) => (
    <div key={i}>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.job}</h2>
    </div>
  ))

  return (
    <div className="container">
      <h1>React with Typescript</h1>

      <form onSubmit={submitForm}>
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

      { allUsers }
    </div>
    
  );
}

export default App;
