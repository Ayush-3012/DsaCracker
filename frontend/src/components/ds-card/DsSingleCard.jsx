import { Link } from "react-router-dom";
import _ from "lodash";

/* eslint-disable react/prop-types */
const DsSingleCard = ({ item }) => {
  const dsName = _.lowerCase(item.topicName);
  return (
    <>
      <div className="bg-slate-200 font-serif rounded-xl hover:shadow-[1px_1px_20px_rgb(52,211,153)] hover:-translate-y-3 transition ease-in-out duration-300">
        <Link to={`/${dsName}`} >
          {/* <div className="image">
            <img src="/assets/images/<%= itemName%>.png" alt="<%=itemName%>" />
          </div> */}
          <div className="text-lg text-center">
            <div>
              <h3 className="uppercase">{item.topicName}</h3>
            </div>
            <div className="flex flex-col gap-4 bg-zinc-300">
              <p className="questionCount">
                Total Questions:{item.questions.length}
              </p>
              <div className="progress-container">
                <p className="progress">Done: {item.doneQuestions}</p>
                <div className="pgr">
                  {/* <progress className="progress-bar" value="0"></progress> */}
                  <div className="inner-progress">
                    <span className="percentValue"></span>
                  </div>
                </div>
                <p>Not yet started</p>
              </div>
            </div>
            <div className="dsDef">
              <p className="paraContent">{item.description}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DsSingleCard;
