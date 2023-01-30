import Quiz from "react-quiz-component";
import './App.css';

export const quiz = {
  quizTitle: "Flowerave",
  quizSynopsis: "Тествовый опрос",
  questions: [
    {
      // Вопрос
      question: "Flowerave это?",
      // Тип
      questionType: "text",
      answerSelectionType: "single",
      // Ответы
      answers: ["Заебись", "Хуево"],
      // Вывод - Верный ответ
      correctAnswer: "1",
      messageForCorrectAnswer: "Ты верно думаешь!",
      // Вывод - Неверный ответ
      messageForIncorrectAnswer: "Неверный ответ",
      // Вывод отпроса
      explanation: "Вывод",
      point: "1"
    },

    // Вопрос 2
    {
      // Вопрос
      question: "Ты уже купил NFT?",
      // Тип
      questionType: "text",
      answerSelectionType: "single",
      // Ответы
      answers: ["Да", "Еще нет"],
      // Вывод - Верный ответ
      correctAnswer: "1",
      messageForCorrectAnswer: "Займи до зп, плиз",
      // Вывод - Неверный ответ
      messageForIncorrectAnswer: "А чего ждем?",
      // Вывод отпроса
      explanation: "Вывод",
      point: "1"
    }
  ]
};

function App() {
  return (
    <div className="App">
      <Quiz quiz={quiz} shuffle={true} showInstantFeedback={true} />
    </div>
  );
}

export default App;
