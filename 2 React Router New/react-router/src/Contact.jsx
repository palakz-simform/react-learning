import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Contact Us
        </h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("info")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Contact Info
          </button>
          <button
            onClick={() => navigate("form")}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Contact Form
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
