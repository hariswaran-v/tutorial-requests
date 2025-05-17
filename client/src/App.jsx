import SuggestionList from "./components/SuggestionList";

const data = [
  {
    _id: "6825e094b2061335de0fe4d9",
    technology: "React.js",
    title: "Build a Dynamic To-Do List with React",
    desc: "Learn how to create a fully functional and dynamic to-do list using React.js. This project covers component structure, state management with hooks, and real-time UI updates based on user interactions.",
    created_at: "2025-05-15T12:39:48.950Z",
    __v: 0,
  },
  {
    _id: "6825e0a4b2061335de0fe4db",
    technology: "Node.js",
    title: "Create a RESTful API with Express",
    desc: "Step-by-step guide to building a RESTful API using Express in Node.js, including routing, middleware, and connecting to a MongoDB database for persistent storage.",
    created_at: "2025-05-15T12:40:04.330Z",
    __v: 0,
  },
  {
    _id: "6825e0b1b2061335de0fe4dd",
    technology: "MongoDB",
    title: "Master CRUD Operations in MongoDB",
    desc: "This tutorial explains how to perform Create, Read, Update, and Delete operations in MongoDB, using Mongoose as an ORM for easy data manipulation and schema validation.",
    created_at: "2025-05-15T12:40:17.366Z",
    __v: 0,
  },
];

const App = () => {
  return (
    <div className="bg-white p-5 rounded shadow">
      <div>
        <h4 className="font-semibold text-xl">
          Requested tutorials around the world
        </h4>
        <p className="text-sm text-gray-700 mt-1">
          People have requested the following
        </p>
      </div>
      {/* List all request here */}
      <section className="my-5 space-y-5">
        {data.map((list) => (
          <SuggestionList
            key={list}
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
