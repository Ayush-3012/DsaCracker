/* eslint-disable react/prop-types */
import DsSingleCard from "./DsSingleCard";

const ShowCard = ({ Questions }) => {
  return (
    <div className="w-[90%] grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center">
      {Questions.map((item, index) => (
        <DsSingleCard
          key={index}
          item={item}
          //   id={item.show.id}
          //   show={item.show}
          //   index={index}
        />
      ))}
    </div>
  );
};

export default ShowCard;
