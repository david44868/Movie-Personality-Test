import React from "react";
import "./Movie.css";
import { motion } from "framer-motion";

const MovieRecommendations = ({ recommendations }) => {
  if (!recommendations || recommendations.length === 0) {
    return <p>No recommendations available. Enter values again.</p>;
  }

  const openIMDbLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="recommendations-title">Movie Recommendations</h2>
        {/* 
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}> */}
        <div className="card-container">
          {recommendations.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() =>
                openIMDbLink(`https://www.themoviedb.org/movie/${movie.id}`)
              }
            >
              <h3>{movie.title}</h3>
              <h4>IMDB Rating: {movie.rating}</h4>
              <img src={movie.posterPath} alt={movie.title} width="200px" />
            </div>
          ))}
        </div>
        <div className="button-container">
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            className="btn btn-primary text-lg font-bold text-white py-2 px-4 rounded"
            style={{ backgroundColor: "#333", color: "#fff" }}
            onClick={() => window.location.reload()}
          >
            Home
          </motion.button>
        </div>
        {/* </motion.div> */}
      </motion.div>
    </div>
  );
};

export default MovieRecommendations;
