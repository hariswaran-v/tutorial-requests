import TheNavbar from "../components/TheNavbar";

const CreateRequest = () => {
  return (
    <div className=" bg-white p-10 shadow rounded">
      <div>
        <h4 className="font-semibold text-xl">Create your request</h4>
      </div>
      <form action="" className="space-y-1 mt-3">
        <div>
          <label
            htmlFor="technology"
            className="block font-semibold text-gray-700"
          >
            Technology
          </label>
          <select
            name="technology"
            id="technology"
            className="bg-gray-300 px-4 py-2 w-full rounded mt-2 outline-none"
          >
            <option value="">-- Select Technology --</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Mongoose">Mongoose</option>
            <option value="Express.js">Express.js</option>
            <option value="React.js">React.js</option>
            <option value="Redux">Redux</option>
            <option value="React Router">React Router</option>
            <option value="Node.js">Node.js</option>
            <option value="JWT">JWT (Authentication)</option>
            <option value="Tailwind CSS">Tailwind CSS</option>
            <option value="Bootstrap">Bootstrap</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Next.js">Next.js</option>
            <option value="React Query">React Query</option>
            <option value="Zod">Zod (Validation)</option>
            <option value="Formik">Formik (Forms)</option>
            <option value="Yup">Yup (Validation)</option>
            <option value="Axios">Axios</option>
            <option value="Postman">Postman</option>
            <option value="Vite">Vite</option>
            <option value="Webpack">Webpack</option>
            <option value="Babel">Babel</option>
          </select>
        </div>
        <div>
          <label htmlFor="title" className="block font-semibold text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter the title"
            className="bg-gray-300 px-4 py-2 w-full rounded mt-2 outline-none"
          />
        </div>
        <div>
          <label htmlFor="title" className="block font-semibold text-gray-700">
            Descritpion
          </label>
          <textarea
            type="text"
            id="desc"
            placeholder="Enter the title"
            className="bg-gray-300 px-4 py-2 w-full rounded mt-2 outline-none"
          />
        </div>
        <div>
          <button className="bg-blue-600 px-4 py-2 text-white font-semibold rounded hover:bg-blue-700">
            Submit your request
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRequest;
