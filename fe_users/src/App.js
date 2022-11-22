import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="add" element={<AddUser />}></Route>
        <Route path="edit/:id" element={<EditUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
