import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Sheet from "./components/Sheet";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header";
import TopicContextProvider from "./topic-context/TopicContextProvider";
import QuestionContextProvider from "./question-context/QuestionContextProvider";

const App = () => {
  return (
    <TopicContextProvider>
      <QuestionContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path={`/:dsName`} element={<Sheet />} />
        </Routes>
        <Footer />
      </QuestionContextProvider>
    </TopicContextProvider>
  );
};

export default App;
