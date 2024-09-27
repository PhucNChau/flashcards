import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const defaultQuizList = [
    {
      id: 1,
      question: "What is the chemical symbol for water?",
      answer: "H2O",
      difficulty: "Easy"
    },
    {
      id: 2,
      question: "What planet is known as the Red Planet?",
      answer: "Mars",
      difficulty: "Easy"
    },
    {
      id: 3,
      question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
      answer: "Carbon dioxide",
      difficulty: "Easy"
    },
    {
      id: 4,
      question: "What force keeps objects anchored to the Earth’s surface?",
      answer: "Gravity",
      difficulty: "Easy"
    },
    {
      id: 5,
      question: "What is the process by which water changes from a liquid to a gas?",
      answer: "Evaporation",
      difficulty: "Easy"
    },
    {
      id: 6,
      question: "What is the most abundant gas in Earth's atmosphere?",
      answer: "Nitrogen (about 78%)",
      difficulty: "Medium"
    },
    {
      id: 7,
      question: "What organ in the human body is primarily responsible for filtering blood?",
      answer: "The Kidneys",
      difficulty: "Medium"
    },
    {
      id: 8,
      question: "Which part of the cell is known as the \"powerhouse\"?",
      answer: "Mitochondria",
      difficulty: "Medium"
    },
    {
      id: 9,
      question: "Which vitamin is produced when a person is exposed to sunlight?",
      answer: "Vitamin D",
      difficulty: "Medium"
    },
    {
      id: 10,
      question: "What is the name of the process where cells divide to form two identical daughter cells?",
      answer: "Mitosis",
      difficulty: "Hard"
    }
  ];

  const [quizList, setQuizList] = useState(defaultQuizList);
  const [quizBundle, setQuizBundle] = useState(null);
  const [deletedList, setDeletedList] = useState([]);
  const [isNew, setIsNew] = useState(false);

  const popQuiz = () => {
    var index = Math.floor(Math.random() * quizList.length);
    setQuizBundle(quizList[index]);
    setDeletedList(deletedList => [...deletedList, quizList[index]]);
    setQuizList(quizList.filter(i => i.id !== quizList[index].id));
    setIsNew(true);
  }

  const pushQuiz = () => {
    var oldQuiz = deletedList.pop();
    setQuizBundle(deletedList[deletedList.length-1]);
    setQuizList(quizList => [...quizList, oldQuiz]);
    setIsNew(true);
  }

  const resetQuiz = () => {
    setQuizBundle(null);
    setQuizList(defaultQuizList);
    setDeletedList([]);
    setIsNew(true);
  }

  return (
    <div className='App'>
      <div className='header'>
        <h1>Welcome to the Science Quiz!</h1>
        <h3>Are you ready to challenge your knowledge of the world around you? Whether you're a science enthusiast or just curious about how things work, this quiz is for you! 🌍✨</h3>
        <h3>Number of cards left: {quizList.length}</h3>
      </div>
      <div className='container'>
        <Card quizBundle={quizBundle} new={isNew} />
        <div className='buttons'>
          <button className={`${(quizBundle === null || deletedList.length < 2) ? 'hide' : ''}`} disabled={quizBundle === null || deletedList.length < 2} onClick={pushQuiz}>&#8592;</button>
          <button className={`${quizBundle === null ? 'hide' : ''}`} disabled={quizBundle === null} onClick={resetQuiz}>&#8634;</button>
          <button className={`${quizList.length === 0 ? 'hide' : ''}`} disabled={quizList.length === 0} onClick={popQuiz}>&#8594;</button>
        </div>
      </div>
    </div>
  )
}

export default App
