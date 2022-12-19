import React, { useState } from "react";
import SearchUserForm from "./Components/SearchUserForm/SearchUserForm";
import UserList from "./Components/UserList/UserList";

function App() {
  const [users, setUserList] = useState([]);

  return (
    <div className="app">
      <header>Search Git User App</header>
      <SearchUserForm onFindUsers={(listOfUsers) => setUserList(listOfUsers)} />
      <UserList users={users}/>
    </div>
  );
}

export default App;
