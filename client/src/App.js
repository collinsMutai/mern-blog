import "./App.css";
import Header from "./Header";
import IndexPage from "./pages/IndexPage";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import Post from "./Post";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
