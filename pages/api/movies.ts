import type { NextApiRequest, NextApiResponse } from 'next'

type MovieQuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

type MovieQuiz = {
  questions: MovieQuizQuestion[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieQuiz>
) {
  console.log("hello api has been hit");
  
  res.status(200).setHeader("Set-Cookie","name=vicccc").json({
  "questions": [
    {
      "question": "What is the highest-grossing movie of all time?",
      "options": ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
      "answer": "Avatar"
    },
    {
      "question": "Who directed the movie The Dark Knight?",
      "options": ["Martin Scorsese", "Steven Spielberg", "Christopher Nolan", "Quentin Tarantino"],
      "answer": "Christopher Nolan"
    },
    {
      "question": "What is the name of the character played by Tom Hanks in the movie Cast Away?",
      "options": ["Chuck Noland", "Forrest Gump", "David Dunn", "Andrew Beckett"],
      "answer": "Chuck Noland"
    },
    {
      "question": "What is the name of the villain in the movie The Silence of the Lambs?",
      "options": ["Hannibal Lecter", "Norman Bates", "Patrick Bateman", "Freddy Krueger"],
      "answer": "Hannibal Lecter"
    },
    {
      "question": "What is the name of the main character in the movie Rocky?",
      "options": ["Rocky Balboa", "Tony Montana", "Scarface", "Johnny Utah"],
      "answer": "Rocky Balboa"
    },
    {
      "question": "Who played the character of Neo in the movie The Matrix?",
      "options": ["Keanu Reeves", "Tom Cruise", "Brad Pitt", "Johnny Depp"],
      "answer": "Keanu Reeves"
    },
    {
      "question": "What is the name of the fictional African country featured in the movie Black Panther?",
      "options": ["Wakanda", "Zamunda", "Genovia", "Latveria"],
      "answer": "Wakanda"
    },
    {
      "question": "What is the name of the character played by Leonardo DiCaprio in the movie Titanic?",
      "options": ["Jack Dawson", "Tommy DeVito", "Jordan Belfort", "Danny Archer"],
      "answer": "Jack Dawson"
    },
    {
      "question": "Who directed the movie Jaws?",
      "options": ["Steven Spielberg", "Martin Scorsese", "Francis Ford Coppola", "Alfred Hitchcock"],
      "answer": "Steven Spielberg"
    },
    {
      "question": "What is the name of the character played by Sigourney Weaver in the movie Alien?",
      "options": ["Ripley", "Sarah Connor", "Princess Leia", "Buffy Summers"],
      "answer": "Ripley"
    }
  ]
});
}