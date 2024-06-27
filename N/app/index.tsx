import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Audio } from "expo-av";
import Confetti from "react-native-confetti";

const difficulties = {
  easy: 9, // 5x5 table
  medium: 12, // 8x8 table
  hard: 16, // 12x12 table
};

function App() {
  const [highlightedNumber, setHighlightedNumber] = useState<number>();
  const [testMeMode, setTestMeMode] = useState(false);
  const [randomQuestion, setRandomQuestion] = useState({
    factor1: 1,
    factor2: 1,
  });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isChallengeActive, setIsChallengeActive] = useState(false);
  const [difficulty, setDifficulty] = useState(difficulties.medium);
  const [confetti, setConfetti] = useState(false);
  let confettiView: Confetti | null = null;

  const [correctSound, setCorrectSound] = useState(new Audio.Sound());
  const [wrongSound, setWrongSound] = useState(new Audio.Sound());

  useEffect(() => {
    const loadSounds = async () => {
      try {
        await correctSound.loadAsync(require("./sounds/correct.mp3"));
        await wrongSound.loadAsync(require("./sounds/wrong.mp3"));
      } catch (error) {
        console.error("Error loading sounds", error);
      }
    };

    loadSounds();

    return () => {
      correctSound.unloadAsync();
      wrongSound.unloadAsync();
    };
  }, [correctSound, wrongSound]);

  const generateNewQuestion = useCallback(
    () => ({
      factor1: Math.ceil(Math.random() * difficulty),
      factor2: Math.ceil(Math.random() * difficulty),
    }),
    [difficulty]
  );

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isChallengeActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && isChallengeActive) {
      endChallenge();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isChallengeActive]);

  const startChallenge = () => {
    setHighlightedNumber(0);
    setTestMeMode(true);
    setIsChallengeActive(true);
    setScore(0);
    setTimeLeft(30);
    setRandomQuestion(generateNewQuestion());
  };

  const endChallenge = useCallback(() => {
    setIsChallengeActive(false);
    setTestMeMode(false);
    setConfetti(true);
    confettiView?.startConfetti();
    Alert.alert(`Time's up! Your score is ${score}.`);
    correctSound.stopAsync();
    wrongSound.stopAsync();
  }, [score, correctSound, wrongSound]);

  const checkAnswer = useCallback(
    async (value: number) => {
      if (
        testMeMode &&
        value === randomQuestion.factor1 * randomQuestion.factor2
      ) {
        setScore(score + 1);
        setRandomQuestion(generateNewQuestion());
        try {
          await correctSound.replayAsync();
        } catch (error) {
          console.error("Error playing correct sound", error);
        }
      } else if (testMeMode) {
        try {
          await wrongSound.replayAsync();
        } catch (error) {
          console.error("Error playing wrong sound", error);
        }
      }
    },
    [
      testMeMode,
      score,
      randomQuestion,
      generateNewQuestion,
      correctSound,
      wrongSound,
    ]
  );

  const handleDifficultyChange = (
    newDifficulty: React.SetStateAction<number>
  ) => {
    setDifficulty(newDifficulty);
    setRandomQuestion(generateNewQuestion());
  };

  const tableData = Array.from({ length: difficulty }, (_, row) =>
    Array.from({ length: difficulty }, (_, col) => (row + 1) * (col + 1))
  );

  return (
    <View style={styles.container}>
      <View style={styles.difficultySelector}>
        <TouchableOpacity
          style={styles.difficultyButton}
          onPress={() => handleDifficultyChange(difficulties.easy)}
        >
          <Text style={styles.buttonText}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.difficultyButton}
          onPress={() => handleDifficultyChange(difficulties.medium)}
        >
          <Text style={styles.buttonText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.difficultyButton}
          onPress={() => handleDifficultyChange(difficulties.hard)}
        >
          <Text style={styles.buttonText}>Hard</Text>
        </TouchableOpacity>
      </View>

      {testMeMode && (
        <View style={styles.challengeInfo}>
          <Button title="Stop Challenge" onPress={endChallenge} />
          <Text>Score: {score}</Text>
          <Text>Time left: {timeLeft}s</Text>
          <Text>
            What is {randomQuestion.factor1} x {randomQuestion.factor2}?
          </Text>
        </View>
      )}

      {!testMeMode && (
        <Button title="Start Challenge!" onPress={startChallenge} />
      )}
      {confetti && <Confetti ref={(node) => (confettiView = node)} />}
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.headerCell}>X</Text>
          {tableData[0].map((_, index) => (
            <Text key={index} style={styles.headerCell}>
              {index + 1}
            </Text>
          ))}
        </View>
        {tableData.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            <Text style={styles.headerCell}>{rowIndex + 1}</Text>
            {row.map((cell, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[
                  styles.cell,
                  highlightedNumber === cell && styles.highlighted,
                ]}
                onPress={() =>
                  testMeMode ? checkAnswer(cell) : setHighlightedNumber(cell)
                }
              >
                <Text>{cell}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    padding: 20,
    fontFamily: "Arial",
    justifyContent: "center",
    alignItems: "center",
  },
  difficultySelector: {
    flexDirection: "row",
    marginBottom: 10,
  },
  difficultyButton: {
    padding: 5,
    marginRight: 5,
    backgroundColor: "#FFA500",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  challengeInfo: {
    margin: 20,
    alignItems: "center",
  },
  table: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#333",
  },
  row: {
    flexDirection: "row",
  },
  headerCell: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#333",
    width: 40,
    height: 40,
    backgroundColor: "#FFA500",
    fontWeight: "bold",
    textAlign: "center",
  },
  cell: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#333",
    width: 40,
    height: 40,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  highlighted: {
    backgroundColor: "yellow",
  },
});

export default App;
