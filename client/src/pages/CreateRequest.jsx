import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const requestSchema = z.object({
  technology: z.string().min(1, "Please select a technology"),
  title: z
    .string()
    .min(10, "Title must be at least 10 characters")
    .max(190, "Title must not exceed 190 characters"),
  desc: z
    .string()
    .min(30, "Description must be at least 30 characters")
    .max(2000, "Description must not exceed 2000 characters"),
});

const CreateRequest = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(requestSchema),
    mode: "onChange",
  });

  // Watch form values for character counts
  const watchedTitle = watch("title", "");
  const watchedDesc = watch("desc", "");

  const technologies = [
    { value: "MongoDB", icon: "🍃", category: "Database" },
    { value: "Mongoose", icon: "🦫", category: "ODM" },
    { value: "Express.js", icon: "⚡", category: "Backend" },
    { value: "React.js", icon: "⚛️", category: "Frontend" },
    { value: "Redux", icon: "🔄", category: "State Management" },
    { value: "React Router", icon: "🛣️", category: "Routing" },
    { value: "Node.js", icon: "🟢", category: "Runtime" },
    { value: "JWT", icon: "🔐", category: "Authentication" },
    { value: "Tailwind CSS", icon: "🎨", category: "Styling" },
    { value: "Bootstrap", icon: "📱", category: "Styling" },
    { value: "TypeScript", icon: "📘", category: "Language" },
    { value: "Next.js", icon: "▲", category: "Framework" },
    { value: "React Query", icon: "🔍", category: "Data Fetching" },
    { value: "Zod", icon: "✅", category: "Validation" },
    { value: "Formik", icon: "📝", category: "Forms" },
    { value: "Yup", icon: "✔️", category: "Validation" },
    { value: "Axios", icon: "📡", category: "HTTP Client" },
    { value: "Postman", icon: "📮", category: "API Testing" },
    { value: "Vite", icon: "⚡", category: "Build Tool" },
    { value: "Webpack", icon: "📦", category: "Bundler" },
    { value: "Babel", icon: "🔄", category: "Compiler" },
  ];

  const sendToServer = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://tutorial-requests-dhcd.onrender.com/create",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            created_at: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit request");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessMessage = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md mx-4 shadow-2xl">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Request Submitted Successfully!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Thank you for your contribution! Your tutorial request has been
            added to the community board.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Redirecting to home page...
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 border-b border-gray-200 dark:border-gray-700 p-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Create Tutorial Request
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Share what you'd like to learn and help build the community
                  knowledge base
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit(sendToServer)} className="space-y-8">
              {/* Technology Selection */}
              <div className="space-y-2">
                <label
                  htmlFor="technology"
                  className="block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Technology / Framework
                </label>
                <div className="relative">
                  <select
                    id="technology"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none ${
                      errors.technology
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                        : "border-gray-200 dark:border-gray-600 focus:border-blue-500"
                    } text-gray-900 dark:text-white`}
                    {...register("technology")}
                  >
                    <option value="">Select a technology...</option>
                    {technologies.map((tech) => (
                      <option key={tech.value} value={tech.value}>
                        {tech.icon} {tech.value} ({tech.category})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.technology && (
                  <p className="flex items-center text-sm text-red-600 dark:text-red-400">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.technology.message}
                  </p>
                )}
              </div>

              {/* Title */}
              <div className="space-y-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Request Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="title"
                    placeholder="e.g., How to implement JWT authentication in Node.js"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.title
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                        : "border-gray-200 dark:border-gray-600 focus:border-blue-500"
                    } text-gray-900 dark:text-white placeholder-gray-400`}
                    {...register("title")}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span
                      className={`text-xs ${
                        watchedTitle.length > 190
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      {watchedTitle.length}/190
                    </span>
                  </div>
                </div>
                {errors.title && (
                  <p className="flex items-center text-sm text-red-600 dark:text-red-400">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label
                  htmlFor="desc"
                  className="block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Detailed Description
                </label>
                <div className="relative">
                  <textarea
                    id="desc"
                    rows={6}
                    placeholder="Provide a detailed description of what you want to learn. Include specific topics, use cases, or problems you want to solve..."
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y min-h-[120px] ${
                      errors.desc
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                        : "border-gray-200 dark:border-gray-600 focus:border-blue-500"
                    } text-gray-900 dark:text-white placeholder-gray-400`}
                    {...register("desc")}
                  />
                  <div className="absolute bottom-3 right-3">
                    <span
                      className={`text-xs ${
                        watchedDesc.length > 2000
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      {watchedDesc.length}/2000
                    </span>
                  </div>
                </div>
                {errors.desc && (
                  <p className="flex items-center text-sm text-red-600 dark:text-red-400">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.desc.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors duration-200"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4V1m0 3v3m8-3h-3m3 0h3M7 7V4m0 3v3m0-3H4m3 0H1"
                        />
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </div>

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-red-700 dark:text-red-300 font-medium">
                      Failed to submit request. Please try again.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {submitStatus === "success" && <SuccessMessage />}
    </>
  );
};

export default CreateRequest;
