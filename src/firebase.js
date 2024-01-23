import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore, getDoc, doc, setDoc} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyD1vvaK-oNpeTLf3YtM5m1dKxHAkgwGR1E",
  authDomain: "quizapp-2aaae.firebaseapp.com",
  projectId: "quizapp-2aaae",
  storageBucket: "quizapp-2aaae.appspot.com",
  messagingSenderId: "411028115203",
  appId: "1:411028115203:web:c8807d7f082a2c5a3fa336",
  measurementId: "G-8RGM6YSZ36"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const app = initializeApp(firebaseConfig);


const questions = [
  {
    question: "Which country is known for inventing paper?",
    choices: ["Japan", "Egypt", "China", "Greece"],
    correctAnswer: "China",
    type: "MCQs"
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Jupiter", "Saturn", "Mars", "Neptune"],
    correctAnswer: "Jupiter",
    type: "MCQs"
  },
  {
    question: "Who is known as the 'Father of History'?",
    choices: ["Herodotus", "Socrates", "Plato", "Aristotle"],
    correctAnswer: "Herodotus",
    type: "MCQs"
  },
  {
    question: "What instrument is used to measure atmospheric pressure?",
    choices: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
    correctAnswer: "Barometer",
    type: "MCQs"
  },
  {
    question: "Which artist is famous for the painting 'The Scream'?",
    choices: ["Edvard Munch", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    correctAnswer: "Edvard Munch",
    type: "MCQs"
  },
  {
    question: "What is the capital of Sweden?",
    choices: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
    correctAnswer: "Stockholm",
    type: "MCQs"
  },
  {
    question: "Which element is represented by the symbol 'Hg'?",
    choices: ["Hydrogen", "Helium", "Mercury", "Magnesium"],
    correctAnswer: "Mercury",
    type: "MCQs"
  },
  {
    question: "Who is the author of 'Pride and Prejudice'?",
    choices: ["Jane Austen", "Emily Bronte", "Charlotte Bronte", "Louisa May Alcott"],
    correctAnswer: "Jane Austen",
    type: "MCQs"
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
    type: "MCQs"
  },
  {
    question: "Which river flows through the Grand Canyon?",
    choices: ["Colorado River", "Mississippi River", "Rio Grande", "Amazon River"],
    correctAnswer: "Colorado River",
    type: "MCQs"
  },
  {
    question: "Who composed the music for the ballet 'Swan Lake'?",
    choices: ["Pyotr Ilyich Tchaikovsky", "Johann Sebastian Bach", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart"],
    correctAnswer: "Pyotr Ilyich Tchaikovsky",
    type: "MCQs"
  },
  {
    question: "What is the smallest bone in the human body?",
    choices: ["Stapes", "Femur", "Humerus", "Fibula"],
    correctAnswer: "Stapes",
    type: "MCQs"
  },
  {
    question: "In which city is the famous Colosseum located?",
    choices: ["Rome", "Athens", "Istanbul", "Paris"],
    correctAnswer: "Rome",
    type: "MCQs"
  },
  {
    question: "Which ocean lies on the east coast of the United States?",
    choices: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: "Atlantic Ocean",
    type: "MCQs"
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
    correctAnswer: "F. Scott Fitzgerald",
    type: "MCQs"
  },
  {
    question: "Which country is known as the land of the midnight sun?",
    choices: ["Norway", "Sweden", "Iceland", "Finland"],
    correctAnswer: "Norway",
    type: "MCQs"
  },
  {
    question: "What is the name of the world's largest coral reef system?",
    choices: ["Great Barrier Reef", "Red Sea Coral Reef", "New Caledonia Barrier Reef", "Mesoamerican Reef"],
    correctAnswer: "Great Barrier Reef",
    type: "MCQs"
  },
  {
    question: "Which planet in our solar system has the most moons?",
    choices: ["Jupiter", "Saturn", "Mars", "Uranus"],
    correctAnswer: "Saturn",
    type: "MCQs"
  },
  {
    question: "What is the chemical formula for water?",
    choices: ["H2O", "CO2", "O2", "H2SO4"],
    correctAnswer: "H2O",
    type: "MCQs"
  },
  {
    question: "Which famous scientist developed the three laws of motion?",
    choices: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
    correctAnswer: "Isaac Newton",
    type: "MCQs"
  }
];


// Function to upload questions
const uploadQuestions = async () => {
  try {
    for (let i = 0; i < questions.length; i++) {
      const questionDocRef = doc(firestore, 'questions', `question${i + 43}`);
      await setDoc(questionDocRef, questions[i]);
    }
    console.log('All questions uploaded successfully');
  } catch (error) {
    console.error('Error uploading questions:', error);
  }
};

export { auth, firestore, uploadQuestions};
