import Header from "./partials/Header";
import Footer from "./partials/Footer";
// import About from "./About";
import DsCard from "../components/ds-card/DsCard";
import Questions from "/questions.js";

const Home = () => {
  return (
    <>
      <div className="bg-zinc-400 flex flex-col items-center justify-center">
        <Header />
        <DsCard Questions={Questions} />
        {/* <About /> */}
        <Footer />
      </div>
    </>
  );
};
export default Home;
