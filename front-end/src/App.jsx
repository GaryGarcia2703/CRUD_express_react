import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/users";
import UserDetail from "./pages/UserDetail";
import NewUser from "./pages/NewUser";
import DeleteUser from "./pages/DeleteUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/NewUser" element={<NewUser />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/DeleteUser/:id" element={<DeleteUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;