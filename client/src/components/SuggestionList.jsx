import PropTypes from "prop-types";
import { formatDate, timeFromNow } from "../helpers";

const SuggestionList = ({ technology, title, desc, created_at }) => {
  return (
    <div className="border rounded flex items-center space-x-4">
      <img
        src={`https://ui-avatars.com/api/?name=${technology}&background=random&length=3&font-size=0.22&bold`}
        alt={technology}
        className="w-24 rounded-l"
      />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm"> {desc}</p>
        <section className="text-xs font-medium text-gray-800 flex items-center gap-2 py-1 rounded">
          <time className="bg-green-300 p-1 rounded">
            {formatDate(created_at)}
          </time>
          <span>•</span>
          <time>{timeFromNow(created_at)}</time>
        </section>
      </div>
    </div>
  );
};

SuggestionList.propTypes = {
  technology: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  created_at: PropTypes.func.isRequired,
};

export default SuggestionList;
