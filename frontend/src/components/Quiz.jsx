import React, { useState, useEffect } from "react";
import quizData from "../data/Quizes.json"; // Adjust the path as necessary

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Directly setting the questions from the imported JSON file
    try {
      setQuestions(quizData.quizzes);
      setLoading(false); // Set loading to false once data is set
    } catch (error) {
      console.error("Error loading quiz data:", error);
      setError("Error loading quiz data");
      setLoading(false);
    }
  }, []);

  const handleAnswerChange = (questionIndex, option) => {
    setAnswers({
      ...answers,
      [questionIndex]: option,
    });
  };

  const handleSubmit = () => {
    let totalScore = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        totalScore++;
      }
    });

    setScore(totalScore);
  };

  // Loading state
  if (loading) {
    return <p className="text-center text-gray-600">Loading quiz...</p>;
  }

  // Error state
  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  // No questions available
  if (questions.length === 0) {
    return <p className="text-center text-gray-600">No quiz available</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        PACE Mission Quiz
      </h1>

      {questions.map((q, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            {q.question}
          </h3>
          {q.options.map((option, optIndex) => (
            <label key={optIndex} className="block mb-2">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleAnswerChange(index, option)}
                className="mr-2"
              />
              <span className="text-gray-600">{option}</span>
            </label>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Submit Quiz
      </button>

      {score !== null && (
        <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 text-blue-800 rounded-lg">
          <h2 className="text-2xl font-bold">
            Your Score: {score} / {questions.length}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
