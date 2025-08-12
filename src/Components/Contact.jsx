import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const params = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send("service_lpcrc4o", "template_02sf9g1", params, "adu_XGNYc-YP_2Vo8")
      .then((response) => {
        Swal.fire({
          title: "Message sent successfully!",
          icon: "success",
          draggable: true,
        });
        // console.log(response)
      })
      .catch((error) => {
        Swal.fire("Something went wrong!❌ Please try again.");

        // console.log(error)
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 bg-[#ECF5FF] dark:bg-gray-900 transition-all"
    >
      <h2 className="text-4xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white font-raleway">
        Contact With Me
      </h2>
      <p className="text-center max-w-4xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
        I'm always open to discussing new opportunities, creative ideas, or
        potential collaborations. Whether you have a question, a project in
        mind, or just want to say hello — feel free to reach out! I’ll try my
        best to respond as quickly as possible.
      </p>
      <div className="max-w-5xl mx-auto border-2 border-[#5e7999] rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row gap-6 bg-transparent">
        {/* Left Card */}
        <div className="flex-1 flex flex-col justify-center items-start bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Let's Connect
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" /> ahmedeleus45@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-600" /> +880 1811-190052
            </p>
            <p className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" /> +880 1811-190052
            </p>
          </div>

          <div className="flex gap-4 pt-4 text-xl text-gray-600 dark:text-gray-300">
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="hover:text-blue-500" />
            </a>
            <a href="https://github.com/Charlie-033" target="_blank">
              <FaGithub className="hover:text-gray-800 dark:hover:text-white" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaFacebook className="hover:text-blue-600" />
            </a>
          </div>
        </div>

        {/* Right Card */}
        <form
          onSubmit={sendEmail}
          className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Send Me a Message
          </h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your Name"
            className="w-full p-3 rounded border bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your Email"
            className="w-full p-3 rounded border bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="6"
            placeholder="Your Message"
            className="w-full p-3 rounded border bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-all font-medium"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
