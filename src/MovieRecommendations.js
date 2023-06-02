import React from "react";

const MovieRecommendations = () => {
  const recommendations = [
    "Crater",
    "Peter Pan & Wendy",
    "Pirates Down the Street II: The Ninjas from Across",
    "Sonic the Hedgehog 2",
    "DC League of Super-Pets",
  ];

  if (!recommendations || recommendations.length === 0) {
    return <p>No recommendations available.</p>;
  }

  return (
    <div className="flex flex-wrap bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-7 rounded-lg shadow-xl m-10 text-white">
      <div className="py-7">
        <h2 className="basis-full text-center font-bold text-2xl">
          Movie Recommendations
        </h2>
        <div className="backdrop-blur rounded-lg max-w-[85%] p-10 mx-auto my-14 border-solid border-2 border-white">
          {recommendations.map((movie) => (
            <div key={movie} className="basis-full mb-10 font-normal text-xl">
              <h3>{movie}</h3>
            </div>
            // <div key={movie.id}>
            //   <h3>{movie.title}</h3>
            //   <p>{movie.overview}</p>
            //   <p>Rating: {movie.vote_average}</p>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRecommendations;
