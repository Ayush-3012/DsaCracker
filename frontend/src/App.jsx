import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Sheet from "./components/Sheet";
import Header from "./components/partials/Header";
import TopicContextProvider from "./topic-context/TopicContextProvider";
import QuestionContextProvider from "./question-context/QuestionContextProvider";
import AppContextProvider from "./app-context/AppContextProvider";
import Index from "./components/Index";
import Account from "./components/Account";

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
            <Route path="account" element={<Account />} />
          </Routes>
        </QuestionContextProvider>
      </TopicContextProvider>
    </AppContextProvider>
  );
};

export default App;
