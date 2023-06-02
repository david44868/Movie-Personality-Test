import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PersonalityTestResults = ({
  responses,
  onSubmit,
  movieRecommendations,
}) => {
  const [genreCount, setGenreCount] = useState({});

  const getGenreCount = () => {
    let counts = {};
    for (let i = 3; i < responses.length; i++) {
      let item = responses[i];
      if (counts[item]) {
        counts[item] += 1;
      } else {
        counts[item] = 1;
      }
    }
    setGenreCount(counts);
  };

  useEffect(() => {
    getGenreCount();
  }, []);

  return (
    <div className="relative p-7">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-xl text-white text-center">
          Based on your responses, you are...
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="text-center font-bold text-2xl text-white mx-10 mt-16">
          {" "}
          A {responses[0]} {responses[2]} that finds solace in {responses[1]}.
        </p>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
      >
        <div className="container backdrop-blur rounded-lg max-w-[85%] p-10 mx-auto my-14 border-solid border-2 border-white">
          <p className="text-lg text-white mb-5">
            Each of your answers corresponded with a movie genre:
            <br></br>
          </p>
          <div className="text-white text-lg">
            {Object.keys(genreCount).map((genre) => {
              return (
                <li className="list-none">
                  {genre.charAt(0).toUpperCase() + genre.slice(1)}:{" "}
                  {genreCount[genre]}
                </li>
              );
            })}
          </div>
        </div>
      <div className="mt-0 mb-10 text-white text-lg text-center">
        <p>Now, let's find movies for you based on your favorite genres.</p>
      </div>
      <div className="flex justify-center">
        <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          onClick={() => onSubmit(movieRecommendations)}
          className="bg-white rounded-lg p-3 hover:bg-slate-200"
        >
          Show movie recommendations
        </motion.button>
      </div>
      </motion.div>
    </div>
  );
};

export default PersonalityTestResults;
