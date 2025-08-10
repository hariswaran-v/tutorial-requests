import { useEffect, useState } from "react";
import SuggestionList from "./components/SuggestionList";

const App = () => {
  const [requestedData, setRequestedData] = useState([]);

  async function fetchRequest() {
    const requestAPIData = await fetch(
      "https://tutorial-requests-dhcd.onrender.com/requests"
    );
    const data = await requestAPIData.json();
    setRequestedData(data);
  }

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-4">
        <div>
          <h4 className="font-bold text-2xl text-gray-900">
            Requested Tutorials
          </h4>
          <p className="text-sm text-gray-500 mt-1">
            See what people are asking for worldwide.
          </p>
        </div>

        {/* Refresh Button */}
        <button
          onClick={fetchRequest}
          className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path
              fill="currentColor"
              d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6c0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6c0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4l-4-4z"
            ></path>
          </svg>
          <span>Refresh</span>
        </button>
      </div>

      {/* Content */}
      <section className="my-6 space-y-5">
        {requestedData.length === 0 && (
          <div className="px-10 py-8 text-center space-y-3 bg-gray-50 rounded-xl border border-gray-100">
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/520/922/non_2x/no-result-document-file-data-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg"
              alt="no-data-found"
              className="w-40 mx-auto opacity-80"
            />
            <h4 className="font-semibold text-lg text-gray-800">
              No data available
            </h4>
            <p className="text-gray-500 text-sm">
              Be the first to request a tutorial!
            </p>
          </div>
        )}

        {requestedData.map((list) => (
          <SuggestionList
            key={list._id}
            technology={list.technology}
            title={list.title}
            desc={list.desc}
            created_at={list.created_at}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
