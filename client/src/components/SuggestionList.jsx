import PropTypes from "prop-types";

const SuggestionList = ({ technology, title, desc, created_at }) => {
  return (
    <div className="border rounded flex items-center space-x-4">
      <img
        src={`https://ui-avatars.com/api/?name=${technology}&background=random&length=3&font-size=0.22&bold`}
        alt={technology}
        className="w-24"
      />
      <div className="">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm"> {desc}</p>
        <time className="text-xs font-medium text-gray-600 ">{created_at}</time>
      </div>
    </div>
  );
};

SuggestionList.propTypes = {
  technology: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
};

export default SuggestionList;
