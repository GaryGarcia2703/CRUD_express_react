import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/users";
import UserDetail from "./pages/UserDetail";
import NewUser from "./pages/NewUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/NewUser" element={<NewUser />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;