import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Sheet from "./components/Sheet";
import Header from "./components/partials/Header";
import TopicContextProvider from "./topic-context/TopicContextProvider";
import QuestionContextProvider from "./question-context/QuestionContextProvider";
// import SignUp from "./components/auth/SignUp";
import AppContextProvider from "./app-context/AppContextProvider";
// import LogIn from "./components/auth/LogIn";
import Index from "./components/Index";

const App = () => {
  return (
    <AppContextProvider>
      <TopicContextProvider>
        <QuestionContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path={`/:dsName`} element={<Sheet />} />
            {/* <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} /> */}
          </Routes>
        </QuestionContextProvider>
      </TopicContextProvider>
    </AppContextProvider>
  );
};

export default App;
