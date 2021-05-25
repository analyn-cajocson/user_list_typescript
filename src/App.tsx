import React, {useState} from 'react';
import User, { UserInt } from './components/User'
import './App.css';

const App: React.FC = () => {
  interface AllUsersInt {
    currentUser: UserInt;
    allUsers: Array<UserInt>;
  }

  const [usersState, setUsersState] = useState<AllUsersInt>({
    currentUser: {
      name: "",
      age: "",
      job: "",
      deleteUser: () => {}
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
        job: "",
        deleteUser: () => {}
      },
      allUsers: [
        ...usersState.allUsers,
        usersState.currentUser
      ]
    })
  }

  const allUsers = usersState.allUsers.map((user, i) => (
    <User 
      key={i}
      name={user.name}
      age={user.age}
      job={user.job}
      deleteUser={() => deleteHandler(i)}
      />
  ))

  const deleteHandler = (index: number) : void => {
    const filterUsers = usersState.allUsers.filter((user, i) => {
      return index !== i
    })

    setUsersState({
      ...usersState,
      allUsers: filterUsers
    })
  }

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
          required
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
          required
        />

        <button type="submit">Add user</button>
      </form>

      { allUsers }
    </div>
    
  );
}

export default App;
