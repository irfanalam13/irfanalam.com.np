// const PROJECTS = [
//   {
//     id: 1,
//     title: "Educational App",
//     description: "A full-featured learning platform built with Django and React.",
//     image: "/assets/images/project1.jpg",
//     github: "https://github.com/yourusername/eduapp",
//     live: "https://eduapp.vercel.app",
//   },
//   {
//     id: 2,
//     title: "Portfolio Website",
//     description: "My personal portfolio built in React and TailwindCSS.",
//     image: "/assets/images/project2.jpg",
//     github: "https://github.com/yourusername/portfolio",
//     live: "https://portfolio.vercel.app",
//   },
// ];

// export default PROJECTS;





const projectsData = [
  {
    id: 1,
    title: "Educational App",
    shortDescription: "A full-featured learning platform built with React and Django.",
    fullDescription:
      "This app includes notes, videos, MCQs, and user authentication. It supports multiple languages and responsive design for both desktop and mobile.",
    image: "/images/eduapp.png",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    shortDescription: "An online store with cart, product filters, and admin dashboard.",
    fullDescription:
      "Developed using Django for backend and React for frontend. It includes payment integration, inventory management, and user authentication.",
    image: "/images/ecommerce.png",
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    shortDescription: "Chatbot built using OpenAI API for smart responses.",
    fullDescription:
      "This project integrates GPT-based AI for answering queries. It’s deployed with FastAPI and React, and supports context-aware chat history.",
    image: "/images/aichat.png",
  },
];

export default projectsData;
