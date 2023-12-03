import "./App.css";
import Header from "./Header";
import IndexPage from "./IndexPage";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import Post from "./Post";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
