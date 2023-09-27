import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Splash from "./components/Splash";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";


function App() {
  return (
  <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<Splash />} />
      <Route path="login" element={<Login/>} />
      
      {/* {Protected Routes Begin} */}
      <Route path="dash" element={<DashLayout />}>

        <Route index element={<Welcome/>} />
        <Route path="notes" >
          <Route index element={<NotesList/>} />
        </Route>  {/* {End of Notes} */}

        <Route path="users" >
          <Route index element={<UsersList/>} />
        </Route> {/* {End of Users} */}

      </Route> {/* {End of DashLayout} */}
      {/* {Protected Routes End} */}
      
    </Route> {/* {End of Layout} */}
  </Routes>
  );
}

export default App;