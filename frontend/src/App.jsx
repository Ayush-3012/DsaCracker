import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Sheet from "./components/Sheet";
import Header from "./partials/Header";
// import TopicContextProvider from "./topic-context/TopicContextProvider";
// import QuestionContextProvider from "./question-context/QuestionContextProvider";
import { AppContextProvider } from "./context/AppContextProvider";
import Index from "./pages/Index";
// import Account from "./pages/Account";
import NotFound from "./partials/NotFound";
import DsCard from "./components/DsCard";

const App = () => {
  return (
    <AppContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sheet/:sheetName" element={<DsCard />} />
        {/* <Route path="/about" element={<About />} />
        <Route path={`/ds/:dsName`} element={<Sheet />} />
        <Route path="account" element={<Account />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContextProvider>
  );
};

export default App;
