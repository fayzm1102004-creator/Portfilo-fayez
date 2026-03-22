import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen bg-black px-6 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center text-white">
        
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 "
        >
          <h2 className="text-5xl font-bold text-yellow-400">Let’s work together</h2>
          <p className="text-gray-300 text-lg">
            Feel free to reach out for any collaboration, project, or idea. I’m open to new opportunities and exciting challenges!
          </p>

          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:fayzm5575@gmail.com" className="hover:underline">
                fayzm5575@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <a href="tel:01117636138" className="hover:underline">
                01117636138
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              Giza, Egypt
            </p>

            {/* Social Media */}
            <div className="flex gap-5 mt-4 text-xl">
              <a
                href="https://github.com/fayez1-10-2004"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/fayez-mohammed-fayez-b1006a355"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Download CV Button */}
          <a
  href="/Fayez-Mohammed-Fayez-FrontEnd.pdf"
  download
  className="inline-flex items-center gap-2 mt-6 bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
>
  Download CV
</a>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl"
        >
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/30 text-white border border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/30 text-white border border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-black/30 text-white border border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
