import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      <motion.div
        className="max-w-4xl w-full text-center space-y-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-yellow-400"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I'm <span className="text-yellow-400 font-semibold">Fayez</span>, a creative and detail-oriented Front-End Developer.
          I specialize in building modern, responsive, and accessible web interfaces using{" "}
          <span className="text-yellow-400">React</span> and{" "}
          <span className="text-yellow-400">Tailwind CSS</span>. My passion lies in
          delivering smooth user experiences and clean, maintainable code.
        </motion.p>

        {/* Skills */}
        <motion.div
          className="text-left space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Skills</h3>

          {[
            { label: "HTML / CSS", level: "100%" },
            { label: "JavaScript", level: "95%" },
            { label: "React.js", level: "90%" },
            { label: "Tailwind CSS", level: "85%" },
            { label: "Bootstrap CSS", level: "85%" },
            { label: "Git", level: "80%" },
            { label: "Problem solving", level: "70%" },
          ].map((skill, index) => (
            <motion.div key={skill.label}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.2 }}
            >
              <label className="block text-sm mb-1">{skill.label}</label>
              <div className="w-full h-4 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
