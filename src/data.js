import readingroomimage from "./assets/readingroom.png";
import readingroomimagetwo from "./assets/readingroom-2.png";
import quizimage from "./assets/quizapp.PNG";
import quizimagetwo from "./assets/quizapp-2.png";
import todoimage from "./assets/todo.PNG";
import ecommerceimage from "./assets/ecommerce.PNG";
import ecommerceimagetwo from "./assets/ecommerce-2.PNG";

export const projects = [
  {
    id: 1,
    marquee:
      "-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM",
    title: "Reading Room",
    desc: "An individual effort of creating a perfect spot for readers to assuage their desire for knowledge and entertainment that delivers purpose and enthusiasm. Not only does it allow users to 'read' published books from authors around the world, it also gives budding, local authors a chance to publicize their work with the help of the 'write' feature.",
    technicalDesc:
      "For displaying books, Google Books API is hit. Axios is used for fetching data from the API using get request. When a user writes a story, it is written in MongoDB using mongoose library and published in real-time for other users to read. Registering and logging a user is done with the help of context API at frontend. For security of passwords, bcrypt and salting has been used.",
    updateDesc:
      "Reading Room is live. The application's drafts are also provided here. Check out the GitHub repository for the code or click on 'Demo' to view the application online.",
    note: "*Note: Only frontend of the application has been deployed. Therefore, you cannot access the components that are accessed after registering.*",
    tech: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript (ES6)",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Axios",
    ],
    frontend: "https://github.com/aimonimran/reading-room",
    backend: "https://github.com/aimonimran/reading-room-backend",
    liveDemo: "https://astounding-tarsier-da1205.netlify.app/",
    imageone: readingroomimage,
    imagetwo: readingroomimagetwo,
  },
  {
    id: 2,
    marquee:
      "-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-",
    title: "Quiz App",
    desc: "Quiz App enables user to undertake a series of questions. The app is user friendly, and the user shall find it extremely easy to answer questions. At the end of the quiz, a result-report is generated which states the score.",
    technicalDesc:
      "The app displays the following features: Home Screen of application where the user is required to enter his name, questions with four options to choose from, current score after answering each question, and as the user chooses an option, the selected option blinks for three seconds and then it either turns Green if the answer is correct or Red in case of wrong answer. At the end of the quiz, that is, either when the user selects a wrong option or answers all the questions right, a result report is generated stating the score.",
    updateDesc:
      "Quiz App is live. The application's drafts are also provided here. Check out the GitHub repository for the code or click on 'Demo' to view the application online.",
    note: "",
    tech: ["HTML5", "CSS3", "JavaScript (ES6)", "React.js"],
    frontend: "https://github.com/aimonimran/quiz-app",
    backend: "",
    liveDemo: "https://comfy-taffy-ca418c.netlify.app/",
    imageone: quizimage,
    imagetwo: quizimagetwo,
  },
  {
    id: 3,
    marquee:
      "-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APPTO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APPTO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APPTO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-",
    title: "To-Do App",
    desc: "To-Do Application allows you to add or delete items",
    technicalDesc: "",
    updateDesc:
      "To-Do App is live. The application's drafts are also provided here. Check out the GitHub repository for the code or click on 'Demo' to view the application online.",
    note: "",
    tech: ["HTML5", "CSS3", "JavaScript (ES6)", "React.js"],
    frontend: "https://github.com/aimonimran/todo-app",
    backend: "",
    liveDemo: "https://friendly-stroopwafel-891f36.netlify.app",
    imageone: todoimage,
    imagetwo: "",
  },
  {
    id: 4,
    marquee:
      "-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-",
    title: "Ecommerce App",
    desc: "This ecommerce application facilitates the buyer's journey, deliver a great user experience, and ensure that making a purchase is smooth and easy.",
    technicalDesc:
      "The logging in and signup process is made smooth and secure by implementing JSON Web Token. User friendly product filtering and sorting is implemented. Shopping cart provides summary of selected items. Secure and in-app payment is implemented. Checking the shipping status provides ease to the users.",
    updateDesc:
      "Currently, Ecommerce app is not live, although it is in its initial stages. The application's drafts are provided here. Please check out the GitHub repository to keep up with the development of the app.",
    note: "",
    tech: [
      "HTML5",
      "CSS3 (Styled-Components)",
      "JavaScript (ES6)",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Axios",
      "JSON Web Token",
    ],
    frontend: "https://github.com/aimonimran/ecommerce",
    backend: "https://github.com/aimonimran/ecommerce-api",
    liveDemo: "",
    imageone: ecommerceimage,
    imagetwo: ecommerceimagetwo,
  },
];

export const frontend = [
  {
    id: 1,
    skill: "HTML5",
    experience: "Experienced",
  },
  {
    id: 2,
    skill: "CSS3",
    experience: "Intermediate",
  },
  {
    id: 3,
    skill: "Bootstrap",
    experience: "Intermediate",
  },
  {
    id: 4,
    skill: "JavaScript",
    experience: "Beginner",
  },
  {
    id: 5,
    skill: "React.js",
    experience: "Beginner",
  },
  {
    id: 6,
    skill: "Visual Studio Code",
    experience: "Intermediate",
  },
  {
    id: 7,
    skill: "GitHub",
    experience: "Beginner",
  },
];
