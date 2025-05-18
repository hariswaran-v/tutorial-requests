import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const requestSchema = z.object({
  technology: z.string().min(2).max(20),
  title: z.string().min(10).max(190),
  desc: z.string().min(30).max(2000),
});

const CreateRequest = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(requestSchema),
  });

  const sendToServer = async (data) => {
    const response = await fetch(
      "https://tutorial-requests-dhcd.onrender.com/create",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log("Server response body:", response);

    if (response.status === 200) {
      alert("Your request has been posted! Thanks!");
      navigate("/");
    } else {
      alert("There is some problem in sending files!");
    }
  };

  return (
    <div className=" bg-white p-10 shadow rounded">
      <div>
        <h4 className="font-semibold text-xl">Create your request</h4>
      </div>
      <form
        action=""
        className="space-y-1 mt-3"
        onSubmit={handleSubmit(sendToServer)}
      >
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
            {...register("technology")}
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
          {errors.technology && (
            <small className="text-red-500">{errors.technology.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="title" className="block font-semibold text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter the title"
            className="bg-gray-300 px-4 py-2 w-full rounded mt-2 outline-none"
            {...register("title")}
          />
          {errors.title && (
            <small className="text-red-500">{errors.title.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="desc" className="block font-semibold text-gray-700">
            Descritption
          </label>
          <textarea
            type="text"
            name="desc"
            id="desc"
            placeholder="Enter the title"
            className="bg-gray-300 px-4 py-2 w-full rounded mt-2 outline-none"
            {...register("desc")}
          />
          {errors.desc && (
            <small className="text-red-500">{errors.desc.message}</small>
          )}
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
