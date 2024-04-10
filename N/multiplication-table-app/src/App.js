import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Confetti from 'react-confetti';

const difficulties = {
  easy: 5,  // 5x5 table
  medium: 8,  // 8x8 table
  hard: 12  // 12x12 table
};

function App() {
  const [highlightedNumber, setHighlightedNumber] = useState(null);
  const [testMeMode, setTestMeMode] = useState(false);
  const [randomQuestion, setRandomQuestion] = useState({ factor1: 1, factor2: 1 });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isChallengeActive, setIsChallengeActive] = useState(false);
  const [difficulty, setDifficulty] = useState(difficulties.hard);
  const [confetti, setConfetti] = useState(false);

  const correctSound = new Audio('./sounds/correct.mp3');
  const wrongSound = new Audio('./sounds/wrong.mp3');

  const generateNewQuestion = useCallback(() => ({
    factor1: Math.ceil(Math.random() * difficulty),
    factor2: Math.ceil(Math.random() * difficulty),
  }), [difficulty]);

  useEffect(() => {
    let timer;
    if (isChallengeActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && isChallengeActive) {
      endChallenge();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isChallengeActive]);

  const startChallenge = () => {
    setHighlightedNumber(null);
    setTestMeMode(true);
    setIsChallengeActive(true);
    setScore(0);
    setTimeLeft(30);
    setRandomQuestion(generateNewQuestion());
  };

  const endChallenge = useCallback(() => {
    setIsChallengeActive(false);
    setTestMeMode(false);
    setConfetti(true)
    alert(`Time's up! Your score is ${score}.`);
    correctSound.pause();
    correctSound.currentTime = 0;
    wrongSound.pause();
    wrongSound.currentTime = 0;
  }, [score, correctSound, wrongSound]);

  const checkAnswer = useCallback((value) => {
    if (testMeMode && value === randomQuestion.factor1 * randomQuestion.factor2) {
      setScore(score + 1);
      setRandomQuestion(generateNewQuestion());
      correctSound.play();
    } else if (testMeMode) {
      wrongSound.play();
    }
  }, [testMeMode, score, randomQuestion, generateNewQuestion, correctSound, wrongSound]);

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
    setRandomQuestion(generateNewQuestion());
  };

  const tableData = Array.from({ length: difficulty }, (_, row) =>
    Array.from({ length: difficulty }, (_, col) => (row + 1) * (col + 1))
  );

  return (
    <div className="App">
      <div className="difficulty-selector">
        <button onClick={() => handleDifficultyChange(difficulties.easy)}>Easy</button>
        <button onClick={() => handleDifficultyChange(difficulties.medium)}>Medium</button>
        <button onClick={() => handleDifficultyChange(difficulties.hard)}>Hard</button>
      </div>

      {testMeMode && (
        <div className="challenge-info">
          <button onClick={endChallenge}>Stop Challenge</button>
          <p>Score: {score}</p>
          <p>Time left: {timeLeft}s</p>
          <p>
            What is {randomQuestion.factor1} x {randomQuestion.factor2}?
          </p>
        </div>
      )}

      {!testMeMode && <button onClick={startChallenge}>Start Challenge!</button>}
      {confetti && <Confetti />}
      <table>
        <thead>
          <tr>
            <th>X</th>
            {tableData[0].map((_, index) => <th key={index}>{index + 1}</th>)}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th>{rowIndex + 1}</th>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  tabIndex={0}
                  className={highlightedNumber === cell ? 'highlighted' : undefined}
                  onClick={() => testMeMode ? checkAnswer(cell) : setHighlightedNumber(cell)}
                  onKeyDown={(e) => e.key === 'Enter' && testMeMode && checkAnswer(cell)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
