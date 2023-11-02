import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about-Body">
        <div className="about-Page">
          <h1>DSA CRACKER</h1>
          <div className="about">
            <h4>
              450 DSA Cracker helps you build your confidence in solving any
              coding related question and helps you prepare for your placements
              👨🏻‍🎓
            </h4>
            <h4>
              <Link
                to="https://docs.google.com/spreadsheets/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/edit#gid=1773184282"
                target="_blank"
              >
                Dsa Cracker
              </Link>
              is your personal web-based progress tracker based on
              <Link
                to="https://docs.google.com/spreadsheets/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/edit#gid=1773184282"
                target="_blank"
              >
                DSA Cracker Sheet
              </Link>
              by
              <Link
                href="https://www.linkedin.com/in/love-babbar-38ab2887/"
                target="_blank"
              >
                <span>Love Babbar</span>
              </Link>
              🙏🏻
            </h4>
          </div>
          <div className="aboutCreator">
            <h6>
              DSA CRACKER PROJECT BY
              <Link
                href="https://www.linkedin.com/in/ayush-kumar-6137651b4/"
                target="_blank"
              >
                Ayush Kumar
              </Link>
            </h6>
            <p>
              Learning to Code 👨‍💻 <br />
              For the 🧡 to code ✌🏻
              <Link
                className="projectLink"
                href="https://github.com/Ayush-3012/dsaTracker"
                target="_blank"
              >
                <span>This project 🧑‍💻</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
