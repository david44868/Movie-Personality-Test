import React from "react";
import { motion } from "framer-motion";

const ShowPage = ({ onStartTest }) => {
  return (
      <div className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="max-w-md px-6 py-8 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            What Should You Watch Tonight Based on Your Personality?
          </h1>
          <p className="text-lg mb-4 text-gray-700">
            Take the quiz to discover personalized movie recommendations based
            on your preferences and traits.
          </p>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            className="btn btn-primary text-lg font-bold text-white py-2 px-4 rounded"
            onClick={onStartTest}
          >
            {" "}
            Start Test
            {/* <button
            >
            </button> */}
          </motion.button>
        </div>
      </div>
  );
};

export default ShowPage;
