import { Routes, Route } from "react-router-dom";
import Home from "./compoents/Home";
import Header from "./compoents/partials/Header";
import { AppProvider } from "./context/AppContext";
import SignIn from "./compoents/auth/SignIn";
import SignUp from "./compoents/auth/SignUp";
import AddPost from "./compoents/posts/AddPost";

const App = () => {
  return (
    <AppProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addPost" element={<AddPost />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
