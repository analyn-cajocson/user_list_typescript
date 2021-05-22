import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>React with Typescript</h1>

      <form>
        <label htmlFor="userName">Name:</label>
        <input type="text"
          id="userName"
          name="name"
          value=""
        />

        <label htmlFor="userAge">Age:</label>
        <input type="number"
          id="userName"
          name="age"
          value=""
        />

        <label htmlFor="userJob">Job:</label>
        <input type="text"
          id="userJob"
          name="job"
          value=""
        />

        <button type="submit">Add user</button>

      </form>
    </div>
    
  );
}

export default App;
