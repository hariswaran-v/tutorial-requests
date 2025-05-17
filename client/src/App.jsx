import { useEffect, useState } from "react";
import SuggestionList from "./components/SuggestionList";

const App = () => {
  const [requestedData, setRequestedData] = useState([]);

  async function fetchRequest() {
    const requestAPIData = await fetch("http://localhost:3000/requests");
    const data = await requestAPIData.json();
    setRequestedData(data);
  }

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div className="bg-white p-5 rounded shadow">
      <div className="flex items-center justify-between space-x-3">
        <div>
          <h4 className="font-semibold text-xl">
            Requested tutorials around the world
          </h4>
          <p className="text-sm text-gray-700 mt-1">
            People have requested the following
          </p>
        </div>
        <div>
          <button
            onClick={fetchRequest}
            className="bg-yellow-400 p-1 font-semibold rounded flex items-center hover:bg-yellow-500 space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6c0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6c0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4l-4-4z"
              ></path>
            </svg>
            <span>Refresh</span>
          </button>
        </div>
      </div>
      {/* List all request here */}
      <section className="my-5 space-y-5">
        {requestedData.length === 0 && (
          <div className="px-10 text-center space-y-2 rounded">
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/520/922/non_2x/no-result-document-file-data-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg"
              alt="no-data-found"
              className="w-40 mx-auto"
            />
            <h4 className="font-semibold text-xl">No data available!</h4>
            <p>Be the first person to feed your request!</p>
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
