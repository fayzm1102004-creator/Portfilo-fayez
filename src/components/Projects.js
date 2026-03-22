import React from "react";
import { motion } from "framer-motion";
import coffe from '../img/coffe.png'
import todo from '../img/todo.png'
import store from '../img/store.png'
import tazkrte from '../img/tazkrte.png'
const projects = [
  {
    title: "To-Do List",
    description:
      "A dynamic, responsive to-do list app built with Bootstrap 5. Features task addition/removal with smooth UI interactions and consistent layout across devices.",
    image: todo,
    live: "https://fayez-todo-list.netlify.app/",
    github: "https://github.com/fayez1-10-2004/todo",
  },
  {
    title: "Coffee Store",
    description:
      "A modern, responsive coffee shop website built with React and React-Bootstrap. Includes interactive carousel, organized sections, and smooth animations.",
    image: coffe,
    live: "https://fayezcafe.netlify.app/",
    github: "https://github.com/fayez1-10-2004/Coffee",
  },
  {
    title: "Store Online",
    description:
      "An e-commerce React app with component-based architecture. Features dynamic product display, shopping cart, and Context API for managing authentication state.",
    image: store,
    live: "https://fayez-store-online.netlify.app/",
    github: "https://github.com/fayez1-10-2004/store-online",
  },

  {
    title:'Tazkrte',
    description:'A creative React-based ticket generator that allows users to input their name, email, GitHub link, and upload a photo. Generates a styled digital ticket instantly using React and CSS.',
    image:tazkrte,
    live:'https://tazkrte.netlify.app/',
    github:'https://github.com/fayez1-10-2004/My-ticket',

  }
];

function Projects() {
  return (
    <section className="min-h-screen px-6 py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-14 text-yellow-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/5 rounded-xl border border-gray-700 p-5 shadow-md hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black"
                >
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
