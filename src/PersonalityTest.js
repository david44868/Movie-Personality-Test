import React, { useState } from 'react';

const PersonalityTest = ({ onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [completedTest, setCompletedTest] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const questions = [
    {
        question: "How comfortable are you with taking risks in life?",
        options: [
          { value: "risk-taker", label: "I love taking risks and embracing new challenges." },
          { value: "cautious", label: "I prefer playing it safe and being cautious." },
          { value: "balanced", label: "Both, in a balanced way." },
        ],
      },
      {
        question: "Do you find solace in nature or feel more connected to the advancements of technology?",
        options: [
          { value: "nature", label: "Nature" },
          { value: "technology", label: "Technology" },
          { value: "balanced", label: "Both, in a balanced way." },
        ],
      },
      {
        question: "When it comes to adventurous activities, do you prefer engaging in them with a group of people or by yourself?",
        options: [
          { value: "group", label: "I love the thrill of group adventures and enjoy the company of others." },
          { value: "solo", label: "I prefer solo adventures where I can immerse myself in the experience and reflect." },
          { value: "either", label: "Either one is fine." },
        ],
      },
      {
        question: "Which of these is the most interesting to you?",
        options: [
          { value: "family", label: "Spending time with family" },
          { value: "adventure", label: "Finding new things to do" },
          { value: "friends", label: "Creating new relationships" },
        ],
      },
      {
        question: "Which celebrity would you want to be stranded on a desert island with?",
        options: [
          { value: "action", label: "Jason Statham" },
          { value: "comedy", label: "Tom Hanks" },
          { value: "family", label: "Robin Williams" },
        ],
      },
      {
        question: "Are you a bike person, or a porch person?",
        options: [
          { value: "action", label: "Bikes all the way" },
          { value: "comedy", label: "Chillin' on the porch" },
          { value: "friends", label: "Depends on what everyone else is doin' that day!" },
        ],
      },
      {
        question: "Humor: Which houseplant are you?",
        options: [
          { value: "family", label: "Golden Pothos" },
          { value: "action", label: "Monstera" },
          { value: "drama", label: "Fiddle Leaf" },
        ],
      },
      {
        question: "If you had to pick a city to live in, where would it be?",
        options: [
          { value: "action", label: "New York City" },
          { value: "romcom", label: "San Diego" },
          { value: "drama", label: "Chicago" },
        ],
      },
  ];

  const handleResponse = (question, answer) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [question]: answer,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCompletedTest(true);
      onSubmit();
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-8 px-4">
      {currentQuestionIndex < questions.length ? (
        <div className="max-w-lg mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-white">
            {questions[currentQuestionIndex].question}
          </h3>
          {questions[currentQuestionIndex].options.map((option) => (
            <label
              key={option.value}
              className="block py-2 px-4 rounded-md bg-white text-lg text-gray-800 mb-2 cursor-pointer hover:bg-gray-200"
            >
              <input
                type="radio"
                name={`question-${currentQuestionIndex}`}
                value={option.value}
                onChange={(e) => handleResponse(currentQuestionIndex, e.target.value)}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">{option.label}</span>
            </label>
          ))}
        </div>
      ) : (
        <p className="text-2xl font-bold text-white">Test completed. Submitting your responses...</p>
      )}
      {/* Render movie recommendations */}
      {/* ... */}
    </div>
  );
};

export default PersonalityTest;


