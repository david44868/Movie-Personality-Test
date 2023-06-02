import React, { useState } from 'react'
import PersonalityTest from './PersonalityTest'
import MovieRecommendations from './MovieRecommendations'
import ShowPage from './ShowPage'
import './App.css'
import './index.css'


function App() {
  const [completedTest, setCompletedTest] = useState(false)
  const [testStarted, setTestStarted] = useState(false)
  const [movieRecommendations, setMovieRecommendations] = useState(null);

  const handleTestCompletion = (recommendations) => {
    setCompletedTest(true)
    setMovieRecommendations(recommendations)
  }

  const handleStartTest = () => {
    setTestStarted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center">
      {testStarted ? (
        !completedTest ? (
          <PersonalityTest onSubmit={handleTestCompletion} />
        ) : (
          <MovieRecommendations recommendations={movieRecommendations}/>
        )
      ) : (
        <ShowPage onStartTest={handleStartTest} />
      )}
    </div>
  )
}
export default App

